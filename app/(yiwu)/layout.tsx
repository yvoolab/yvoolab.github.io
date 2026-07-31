import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import "../(h-line)/hline.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yvoolab.github.io"),
  title: "小工具集 · 一武出品",
  description: "免费在线小工具：PDF 合并、Excel/CSV 合并。文件不上传服务器，全部在你的浏览器里处理。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@700&family=EB+Garamond:wght@500&display=swap"
          rel="stylesheet"
        />
        <script data-goatcounter="https://yvoolab.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="9600f031-15fb-4c38-9a66-6235c40d94d0"></script>
      </head>
      <body className="hline-theme min-h-screen">
        <header className="border-b hl-hairline">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
            <Link href="/tools" className="hl-logo" aria-label="Yvoolab">
              <span className="hl-logo-word">Yvoolab</span>
              <span className="hl-logo-rule">
                <span className="hl-logo-rule-w">
                  <span className="hl-logo-ghost">Yvoolab</span>
                </span>
                <span className="hl-logo-rule-k" />
              </span>
            </Link>
            <a
              href="mailto:yvoolab@gmail.com"
              className="text-xs tracking-wide hover:underline"
              style={{ color: "var(--hl-fg-muted)" }}
            >
              yvoolab@gmail.com
            </a>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
        <footer className="mt-20 border-t hl-hairline">
          <div
            className="mx-auto max-w-4xl px-6 py-6 text-center text-xs"
            style={{ color: "var(--hl-fg-muted)" }}
          >
            所有文件在你的浏览器内处理，不上传任何服务器。 · 更复杂的需求，发邮件到 yvoolab@gmail.com
            {" · "}
            <a href="/" className="underline">
              查看 Yvoo Lab 全部服务
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
