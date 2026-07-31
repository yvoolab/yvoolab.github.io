import type { Metadata } from "next";

// page.tsx is a client component and can't export metadata; this pass-through layout carries it.
export const metadata: Metadata = {
  title: "PDF 合并 · 免费在线工具",
  description: "按拖入顺序合并多个 PDF，最多 50 个文件。文件全程在你的浏览器里处理，不上传服务器。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
