import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Required for `output: export` — opengraph-image routes must be statically generated.
export const dynamic = "force-static";

const BG = "#f5efe6";
const FG = "#2b2725";
const MUTED = "#6b6560";
const ACCENT = "#9e2b25";

// Google's css2 API serves TTF/OTF when the request lacks a browser UA (Node's
// fetch qualifies), and `text=` subsets the font to only the glyphs we render
// here — a few KB, not the multi-MB full CJK family. Documented Vercel pattern
// for non-Latin OG images with next/og + satori.
async function loadFont(text: string, weight: 400 | 700 = 700): Promise<ArrayBuffer> {
  const css = await (
    await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@${weight}&text=${encodeURIComponent(
        text,
      )}`,
    )
  ).text();
  const match = css.match(/src: url\(([^)]+)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error("Noto Serif SC: google font css returned no usable font url");
  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) throw new Error("Noto Serif SC: failed to fetch font binary");
  return fontRes.arrayBuffer();
}

export async function renderOgImage({
  title,
  priceChip,
}: {
  title: string;
  priceChip?: string;
}) {
  const text = title + (priceChip ?? "") + "Yvoolab欧起";
  const fontData = await loadFont(text, 700);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: MUTED, fontFamily: "Noto Serif SC" }}>
          Yvoolab
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: FG,
            lineHeight: 1.3,
            maxWidth: 980,
            fontFamily: "Noto Serif SC",
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {priceChip ? (
            <div
              style={{
                display: "flex",
                border: `2px solid ${ACCENT}`,
                color: ACCENT,
                borderRadius: 999,
                padding: "12px 28px",
                fontSize: 28,
                fontFamily: "Noto Serif SC",
              }}
            >
              {priceChip}
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: ACCENT,
            }}
          />
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
      fonts: [{ name: "Noto Serif SC", data: fontData, weight: 700, style: "normal" }],
    },
  );
}
