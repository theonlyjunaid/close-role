import { ZodError } from "zod"

import { sendWaitlistEmails, upsertWaitlistSubmission } from "@/lib/waitlist"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const result = await upsertWaitlistSubmission(payload, {
      source: "landing-page",
      referrer: request.headers.get("referer") ?? undefined,
      userAgent: request.headers.get("user-agent") ?? undefined,
    })

    if (result.created) {
      await sendWaitlistEmails(result.submission)
    }

    return Response.json({
      success: true,
      duplicate: !result.created,
      message: result.created
        ? "You're on the waitlist. We'll reach out when early access opens."
        : "You're already on the waitlist. We'll email you as soon as access opens.",
    })
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        {
          success: false,
          message: error.issues[0]?.message ?? "Please check your form and try again.",
        },
        { status: 400 }
      )
    }

    console.error("Failed to process waitlist submission", error)

    return Response.json(
      {
        success: false,
        message: "Something went wrong while saving your request. Please try again.",
      },
      { status: 500 }
    )
  }
}
