import { ImageResponse } from "next/og";

export const alt = "2fastmedia - Websites, Sichtbarkeit und KI Prozesse";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#FFFFFF",
          background: "#0D0D0D",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 20%, rgba(232, 64, 10, 0.36), transparent 32%), radial-gradient(circle at 82% 72%, rgba(232, 64, 10, 0.22), transparent 30%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "18px", position: "relative" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "16px",
              background: "#E8400A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 900,
            }}
          >
            2
          </div>
          <div style={{ fontSize: "34px", fontWeight: 800 }}>2fastmedia</div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "#E8400A", fontSize: "28px", fontWeight: 800, marginBottom: "22px" }}>
            Webdesign · SEO · KI Integration
          </div>
          <div style={{ fontSize: "78px", lineHeight: 1.02, fontWeight: 900 }}>
            Websites, die Vertrauen und Anfragen bringen
          </div>
        </div>
        <div style={{ position: "relative", color: "#D8D8D8", fontSize: "28px" }}>
          Für Unternehmen in NRW und deutschlandweit
        </div>
      </div>
    ),
    size,
  );
}
