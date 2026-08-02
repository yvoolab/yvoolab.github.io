import type { Metadata } from "next";
import { RootShell } from "./_ui/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://yvoolab.github.io"),
  title: "用得起的 AI，听得懂您的 Yvoolab",
  description: "巴黎华人商户的 AI 文书协助——差评回复、催款信、法语公文、找补贴，AI 打草稿，您确认后才发出。",
};

export default function HLineLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="zh-CN" homeHref="/shanghu">
      {children}
    </RootShell>
  );
}
