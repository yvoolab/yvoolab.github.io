import type { MetadataRoute } from "next";

const BASE = "https://yvoolab.github.io";
const TODAY = new Date("2026-08-08");

// ponytail: 静态清单——路由逾三十条或多线共用时再谈自动收集
// lastModified 只标真在当日动过的页；服务页七条不标，免虚假新鲜度信号
const STABLE = [
  "/shanghu",
  "/shanghu/chaping",
  "/shanghu/baojia",
  "/shanghu/butie",
  "/shanghu/tijian",
  "/shanghu/waimai",
  "/shanghu/xunpan",
  "/shanghu/shangjiaye",
  "/fr/shanghu/chaping",
];

const FRESH = [
  "/shanghu/yinsi",
  "/shanghu/zhinan",
  "/shanghu/zhinan/google-chaping-huifu",
  "/shanghu/zhinan/cuikuan-xin",
  "/shanghu/zhinan/xingzheng-xinjian",
  "/shanghu/zhinan/shanghu-butie",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STABLE.map((p) => ({
      url: BASE + p,
      changeFrequency: "monthly" as const,
      priority: p === "/shanghu" ? 1 : 0.7,
    })),
    ...FRESH.map((p) => ({
      url: BASE + p,
      lastModified: TODAY,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
