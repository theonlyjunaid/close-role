"use client"

import type { ChangeEvent, FormEvent } from "react"
import { useState, useTransition } from "react"
import { ArrowRightIcon, CheckCircleIcon, SpinnerGapIcon } from "@phosphor-icons/react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type FormStatus = {
  type: "idle" | "success" | "error"
  message: string
}

type WaitlistFormProps = {
  className?: string
  compact?: boolean
}

const initialStatus: FormStatus = {
  type: "idle",
  message: "",
}

export function WaitlistForm({
  className,
  compact = false,
}: WaitlistFormProps) {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<FormStatus>(initialStatus)
  const [values, setValues] = useState({
    email: "",
    companyName: "",
    hiringRole: "",
  })

  const handleChange =
    (field: "email" | "companyName" | "hiringRole") =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setValues((current) => ({
        ...current,
        [field]: event.target.value,
      }))

      if (status.type !== "idle") {
        setStatus(initialStatus)
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    startTransition(async () => {
      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })

        const payload = (await response.json()) as { message?: string }

        if (!response.ok) {
          setStatus({
            type: "error",
            message:
              payload.message ??
              "Something went wrong. Please try again in a minute.",
          })
          return
        }

        setStatus({
          type: "success",
          message:
            payload.message ??
            "You\u2019re on the list. We\u2019ll email you when early access opens.",
        })
        setValues({
          email: "",
          companyName: "",
          hiringRole: "",
        })
      } catch {
        setStatus({
          type: "error",
          message: "We couldn\u2019t submit your request. Please try again.",
        })
      }
    })
  }

  if (compact) {
    return (
      <form className={cn("space-y-3", className)} onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <Input
            id="hero-email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@company.com"
            autoComplete="email"
            required
            aria-label="Work email"
            className="h-12 flex-1 border-edge bg-white px-4 text-base"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 shrink-0 border border-brand bg-brand px-6 text-base font-semibold text-brand-fg hover:bg-brand-hover"
            disabled={isPending}
          >
            {isPending ? (
              <SpinnerGapIcon className="size-5 animate-spin" />
            ) : (
              <>
                Get free access
                <ArrowRightIcon className="ml-1 size-4" />
              </>
            )}
          </Button>
        </div>
        <p className="text-sm text-slate-500">
          Free forever for your first hire. No credit card required.
        </p>

        {status.type !== "idle" ? (
          <Alert
            variant={status.type === "error" ? "destructive" : "default"}
            className={cn(
              "border px-4 py-3",
              status.type === "success"
                ? "border-sea/15 bg-sea-light text-sea-dark"
                : "border-rose-200 bg-rose-50"
            )}
          >
            {status.type === "success" ? (
              <CheckCircleIcon className="size-4 text-sea" weight="fill" />
            ) : null}
            <AlertTitle>
              {status.type === "success" ? "You\u2019re on the waitlist" : "Submission failed"}
            </AlertTitle>
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        ) : null}
      </form>
    )
  }

  return (
    <form className={cn("space-y-4", className)} onSubmit={handleSubmit}>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="md:col-span-3">
          <Label htmlFor="cta-email" className="mb-2">
            Work email
          </Label>
          <Input
            id="cta-email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@company.com"
            autoComplete="email"
            required
            className="h-11 border-edge bg-white px-3 text-sm"
          />
        </div>

        <div>
          <Label htmlFor="cta-company" className="mb-2">
            Company name
          </Label>
          <Input
            id="cta-company"
            value={values.companyName}
            onChange={handleChange("companyName")}
            placeholder="Optional"
            autoComplete="organization"
            className="h-11 border-edge bg-white px-3 text-sm"
          />
        </div>

        <div>
          <Label htmlFor="cta-role" className="mb-2">
            Next role to hire
          </Label>
          <Input
            id="cta-role"
            value={values.hiringRole}
            onChange={handleChange("hiringRole")}
            placeholder="Optional"
            className="h-11 border-edge bg-white px-3 text-sm"
          />
        </div>

        <div className="flex items-end md:col-span-3">
          <Button
            type="submit"
            size="lg"
            className="h-11 w-full border border-brand bg-brand px-5 text-sm font-semibold text-brand-fg hover:bg-brand-hover"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <SpinnerGapIcon className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Get early access — it&apos;s free
                <ArrowRightIcon className="size-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        One email when we launch. That&apos;s it. No newsletters, no drip campaigns,
        no &quot;thought leadership.&quot;
      </p>

      {status.type !== "idle" ? (
        <Alert
          variant={status.type === "error" ? "destructive" : "default"}
          className={cn(
            "border px-4 py-3",
            status.type === "success"
              ? "border-sea/15 bg-sea-light text-sea-dark"
              : "border-rose-200 bg-rose-50"
          )}
        >
          {status.type === "success" ? (
            <CheckCircleIcon className="size-4 text-sea" weight="fill" />
          ) : null}
          <AlertTitle>
            {status.type === "success" ? "You\u2019re on the waitlist" : "Submission failed"}
          </AlertTitle>
          <AlertDescription>{status.message}</AlertDescription>
        </Alert>
      ) : null}
    </form>
  )
}
