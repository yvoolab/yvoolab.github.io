import type { Metadata } from "next";

// page.tsx is a client component and can't export metadata; this pass-through layout carries it.
export const metadata: Metadata = {
  title: "Excel / CSV 合并 · 免费在线工具",
  description: "把多个 .xlsx / .csv 文件合并到一个 sheet，自动对齐列名。文件全程在你的浏览器里处理，不上传服务器。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
