import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import "./hline.css";
import { CONTACT_LINE, SLOGAN, DISCLAIMER, TOOLS_FOOTER_TEXT } from "./_data/copy";

export const metadata: Metadata = {
  metadataBase: new URL("https://yvoolab.github.io"),
  title: "用得起的 AI，听得懂您的 Yvoolab",
  description: "巴黎华人商户的 AI 文书协助——差评回复、催款信、法语公文、找补贴，AI 打草稿，您确认后才发出。",
};

export default function HLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="hline-theme min-h-screen">
        <header className="border-b hl-hairline">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/shanghu" className="hl-display text-xl">
              Yvoolab
            </Link>
            <span className="text-xs tracking-[0.2em]" style={{ color: "var(--hl-fg-muted)" }}>
              PARIS
            </span>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t hl-hairline">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <p className="hl-display text-2xl leading-snug">{SLOGAN}</p>
            <p className="mt-4 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
              {CONTACT_LINE}
            </p>
            <p className="mt-3 text-sm">
              <Link href="/tools" className="underline underline-offset-4">
                {TOOLS_FOOTER_TEXT}
              </Link>
            </p>
            <p className="mt-8 text-xs leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
              {DISCLAIMER}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
