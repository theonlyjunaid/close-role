import { Resend } from "resend"
import { z } from "zod"

import { getMongoDb } from "@/lib/mongodb"

const waitlistCollectionName = "waitlist_entries"

const optionalString = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined))

export const waitlistSubmissionSchema = z.object({
  email: z.string().trim().min(1, "Work email is required").email("Enter a valid work email").max(320),
  companyName: optionalString(120),
  hiringRole: optionalString(160),
})

export type WaitlistSubmission = z.infer<typeof waitlistSubmissionSchema>

type WaitlistMeta = {
  source: string
  referrer?: string
  userAgent?: string
}

type WaitlistRecord = WaitlistSubmission & {
  normalizedEmail: string
  source: string
  referrer?: string
  userAgent?: string
  createdAt: Date
  updatedAt: Date
  status: "pending"
}

let waitlistIndexesPromise: Promise<void> | undefined

function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

async function ensureWaitlistIndexes() {
  if (!waitlistIndexesPromise) {
    waitlistIndexesPromise = (async () => {
      const db = await getMongoDb()
      await db.collection<WaitlistRecord>(waitlistCollectionName).createIndex(
        { normalizedEmail: 1 },
        { unique: true }
      )
    })()
  }

  await waitlistIndexesPromise
}

export async function upsertWaitlistSubmission(
  payload: unknown,
  meta: WaitlistMeta
) {
  const submission = waitlistSubmissionSchema.parse(payload)
  const normalizedEmail = normalizeEmail(submission.email)
  const now = new Date()

  await ensureWaitlistIndexes()

  const db = await getMongoDb()
  const collection = db.collection<WaitlistRecord>(waitlistCollectionName)

  const result = await collection.updateOne(
    { normalizedEmail },
    {
      $set: {
        email: normalizedEmail,
        companyName: submission.companyName,
        hiringRole: submission.hiringRole,
        source: meta.source,
        referrer: meta.referrer,
        userAgent: meta.userAgent,
        updatedAt: now,
      },
      $setOnInsert: {
        normalizedEmail,
        createdAt: now,
        status: "pending",
      },
    },
    { upsert: true }
  )

  return {
    created: Boolean(result.upsertedId),
    submission: {
      ...submission,
      email: normalizedEmail,
    },
  }
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return null
  }

  return new Resend(apiKey)
}

export async function sendWaitlistEmails(payload: WaitlistSubmission) {
  const resend = getResendClient()
  const from = process.env.RESEND_FROM_EMAIL

  if (!resend || !from) {
    return
  }

  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL
  const roleLine = payload.hiringRole ? `<p><strong>Next role:</strong> ${payload.hiringRole}</p>` : ""
  const companyLine = payload.companyName ? `<p><strong>Company:</strong> ${payload.companyName}</p>` : ""

  const emailJobs = [
    resend.emails.send({
      from,
      to: payload.email,
      subject: "You're on the CloseRole waitlist",
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <p>You're in.</p>
          <p>Thanks for joining the CloseRole early-access waitlist. We'll send one email when access opens.</p>
          <p>Your first job posting is on us.</p>
          <p>- CloseRole</p>
        </div>
      `,
    }),
  ]

  if (notifyEmail) {
    emailJobs.push(
      resend.emails.send({
        from,
        to: notifyEmail,
        subject: `New CloseRole waitlist signup: ${payload.email}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
            <p><strong>Email:</strong> ${payload.email}</p>
            ${companyLine}
            ${roleLine}
          </div>
        `,
      })
    )
  }

  await Promise.all(emailJobs)
}
