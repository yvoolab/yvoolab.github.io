import type { MetadataRoute } from "next";

const BASE = "https://yvoolab.github.io";
const TODAY = new Date("2026-08-08");
const PRODUCTS_DATE = new Date("2026-10-30");

// ponytail: 静态清单——路由逾三十条或多线共用时再谈自动收集
// lastModified 只标真在当日动过的页；服务页七条不标，免虚假新鲜度信号
const STABLE = [
  "", // root hub page (public/index.html)
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

const PRODUCTS = [
  "/products/paycheck-budget-app",
  "/products/notion-life-planner",
  "/products/airbnb-welcome-guide",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STABLE.map((p) => ({
      url: BASE + p + "/",
      changeFrequency: "monthly" as const,
      priority: p === "/shanghu" ? 1 : 0.7,
    })),
    ...FRESH.map((p) => ({
      url: BASE + p + "/",
      lastModified: TODAY,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PRODUCTS.map((p) => ({
      url: BASE + p + "/",
      lastModified: PRODUCTS_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
