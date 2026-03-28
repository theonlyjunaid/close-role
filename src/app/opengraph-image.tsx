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
          padding: "60px",
          background:
            "linear-gradient(145deg, #f0f4f8 0%, #e8eef4 40%, #f5f7fa 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#1B2B3A",
              color: "#f8fafc",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            C
          </div>
          CloseRole
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 840 }}>
          <div
            style={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "#0e8a72",
              fontWeight: 600,
            }}
          >
            AI Hiring Assistant for Small Teams
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Stop reading resumes at midnight.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.45, color: "#475569" }}>
            Post a job, let AI screen every applicant, and get a ranked shortlist with
            interview questions. First job free.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 20,
            color: "#334155",
          }}
        >
          <div style={{ padding: "14px 20px", border: "1px solid rgba(15,23,42,0.1)", background: "rgba(255,255,255,0.8)" }}>
            First job free
          </div>
          <div style={{ padding: "14px 20px", border: "1px solid rgba(15,23,42,0.1)", background: "rgba(255,255,255,0.8)" }}>
            $99 per job after that
          </div>
          <div style={{ padding: "14px 20px", border: "1px solid rgba(15,23,42,0.1)", background: "rgba(255,255,255,0.8)" }}>
            No subscription
          </div>
        </div>
      </div>
    ),
    size
  )
}
