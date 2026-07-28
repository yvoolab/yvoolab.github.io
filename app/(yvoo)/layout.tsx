import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Yvoo Lab — AI-Augmented Builder · SaaS MVPs · RAG · Data Pipelines",
  description:
    "I ship AI-powered products in days, async. SaaS MVPs, RAG, data pipelines, Notion API. Paris CET. EN/FR/ZH. No meetings, no bloat.",
};

export default function YvooLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Yvoo Lab
            </a>
            <a
              href="mailto:yvoolab@gmail.com"
              className="hidden text-sm text-slate-600 hover:text-slate-900 sm:inline"
            >
              yvoolab@gmail.com
            </a>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-6 text-center text-xs text-slate-500">
            <a href="mailto:yvoolab@gmail.com" className="hover:text-slate-900">
              yvoolab@gmail.com
            </a>
            {" · "}
            <a
              href="https://github.com/yvoolab"
              className="hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yvoolab
            </a>
            {" · "}
            <a
              href="https://yvoo.gumroad.com"
              className="hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              gumroad.com/yvoo
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
