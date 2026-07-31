import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "小工具集 · 一武出品",
  description: "免费在线小工具：PDF 合并、Excel/CSV 合并。文件不上传服务器，全部在你的浏览器里处理。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script data-goatcounter="https://yvoolab.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="9600f031-15fb-4c38-9a66-6235c40d94d0"></script>
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/tools" className="text-lg font-semibold tracking-tight">
              小工具集
            </Link>
            <span className="text-xs text-slate-500">小红书 @AI一武</span>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-6 text-center text-xs text-slate-500">
            所有文件在你的浏览器内处理，不上传任何服务器。 · 找我做更复杂的需求请到小红书 @AI一武
          </div>
        </footer>
      </body>
    </html>
  );
}
