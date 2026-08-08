import type { Metadata } from "next";
import Link from "next/link";
import { Divider, Footer } from "../../_ui/components";
import { DISCLAIMER } from "../../_data/copy";

export const metadata: Metadata = {
  title: "商户指南 · 差评、催款、行政信、补贴 — Yvoolab",
  description:
    "写给在法国开店的华人商户的实用指南：Google 差评怎么回、催款信怎么写、法语行政信怎么分轻重、补贴去哪找。中文写成，拿来就能用。",
  alternates: { canonical: "/shanghu/zhinan" },
};

// ponytail: 文章清单手工维护——四篇起步，逾十篇再谈自动收集
const ARTICLES: Array<[string, string, string]> = [
  [
    "/shanghu/zhinan/google-chaping-huifu",
    "法国餐馆的 Google 差评怎么回复？",
    "48 小时内、法语、四步结构；两条可直接改的法语模板，附疑似恶意差评的处理办法。",
  ],
  [
    "/shanghu/zhinan/cuikuan-xin",
    "法国客户欠款不还，催款信怎么写？",
    "催款三步走：友好提醒、正式催告、法律程序——每步的法语信怎么写，既收得回钱又不伤客情。",
  ],
  [
    "/shanghu/zhinan/xingzheng-xinjian",
    "收到法语行政信看不懂，先看这三处",
    "十秒判断一封公文急不急、哪几类信绝不能拖、拖过期限会发生什么。",
  ],
  [
    "/shanghu/zhinan/shanghu-butie",
    "法国小商户找补贴，先弄清三件事",
    "官方渠道去哪查、申请前的三个自查、怎么识别「包办补贴」的坑。",
  ],
];

export default function ZhinanPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">商户指南</h1>
        <p className="mt-3 leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          写给在法国开店的华人老板：差评、催款、行政信、补贴——每篇先给答案，拿来就能用。
        </p>
        <div className="mt-10 space-y-8">
          {ARTICLES.map(([href, title, desc]) => (
            <article key={href}>
              <h2 className="hl-display text-xl leading-snug">
                <Link href={href} className="underline-offset-4 hover:underline">
                  {title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
                {desc}
              </p>
            </article>
          ))}
        </div>
        <Divider />
        <p className="mt-4 text-sm">
          指南解决通例，你的店是特例——
          <Link href="/shanghu" className="underline underline-offset-4">
            全部服务在此
          </Link>
          ，第一条差评回复免费替你写。
        </p>
      </div>
      <Footer disclaimer={DISCLAIMER} />
    </>
  );
}
