import { ImageResponse } from "next/og";

export const alt = "Gowtham Mallikarjuna — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(158,217,249,0.15), transparent 50%)",
          padding: "80px",
          color: "#e5e7eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              color: "#9ed9f9",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              marginTop: 24,
              lineHeight: 1.05,
              color: "#e5e7eb",
            }}
          >
            Gowtham Mallikarjuna
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 36, color: "#b3b3b3", lineHeight: 1.3 }}>
            9+ years at Meta and Amazon. Platform security, distributed systems, experimentation.
          </div>
          <div style={{ fontSize: 28, color: "#9ed9f9", marginTop: 16 }}>
            gowtham.ai
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
