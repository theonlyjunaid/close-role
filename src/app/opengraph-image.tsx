import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, rgba(245,240,229,1) 0%, rgba(239,246,236,1) 45%, rgba(248,245,238,1) 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#143c2f",
              color: "#f8fafc",
              border: "1px solid rgba(20,60,47,0.25)",
            }}
          >
            C
          </div>
          CloseRole
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: 860 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "#166534",
            }}
          >
            Hire without the HR
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 700 }}>
            Your next hire shouldn&apos;t take 20 hours.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "#334155" }}>
            AI reads every application, ranks candidates, writes interview questions,
            and helps founders stop screening resumes at midnight.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: 24,
            color: "#334155",
          }}
        >
          <div style={{ padding: "16px 20px", border: "1px solid rgba(15,23,42,0.12)", background: "rgba(255,255,255,0.7)" }}>
            First job free
          </div>
          <div style={{ padding: "16px 20px", border: "1px solid rgba(15,23,42,0.12)", background: "rgba(255,255,255,0.7)" }}>
            Waitlist open
          </div>
        </div>
      </div>
    ),
    size
  )
}
