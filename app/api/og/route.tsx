import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "Patrícia Mota, PT, PhD";
    const subtitle =
      searchParams.get("subtitle") ||
      "Women's Health Researcher & Eleva.care CEO";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #fef3c7 2%, transparent 0%), radial-gradient(circle at 75px 75px, #fce7f3 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            padding: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#0f172a",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                fontFamily: "serif",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "36px",
                color: "#64748b",
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "24px",
              color: "#94a3b8",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
              }}
            />
            <span>patriciamota.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Failed to generate OG image: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
