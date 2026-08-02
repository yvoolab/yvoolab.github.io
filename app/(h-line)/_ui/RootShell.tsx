import Link from "next/link";
import "../../globals.css";
import "../hline.css";

// H 线两个 root layout（中文 (h-line) / 法语 (h-line-fr)）共用同一副外壳。
// 抽出来是为了 <head> 里的字体与统计脚本只有一份 —— 两份复制迟早改漏一处。
export function RootShell({
  lang,
  homeHref,
  children,
}: {
  /** <html lang> — 中文页 zh-CN，法语页 fr */
  lang: string;
  /** 站头 logo 指向该语言的门面页 */
  homeHref: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang}>
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
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href={homeHref} className="hl-logo" aria-label="Yvoolab">
              <span className="hl-logo-word">Yvoolab</span>
              <span className="hl-logo-rule">
                <span className="hl-logo-rule-w">
                  <span className="hl-logo-ghost">Yvoolab</span>
                </span>
                <span className="hl-logo-rule-k" />
              </span>
            </Link>
            <span className="text-xs tracking-[0.2em]" style={{ color: "var(--hl-fg-muted)" }}>
              PARIS
            </span>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
