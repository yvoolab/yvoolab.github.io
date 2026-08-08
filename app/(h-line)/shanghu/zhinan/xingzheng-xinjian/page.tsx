import type { Metadata } from "next";
import Link from "next/link";
import { Divider, Footer } from "../../../_ui/components";
import { DISCLAIMER } from "../../../_data/copy";

const TITLE = "收到法语行政信看不懂怎么办？先分轻重缓急";
const DESC =
  "在法国开店的华人商户行政信件指南：怎么十秒判断一封法语公文急不急、哪几类信绝不能拖（催告、扣款通知、限期整改）、拖过期限会发生什么。";
const URL_PATH = "/shanghu/zhinan/xingzheng-xinjian";
const PUBLISHED = "2026-08-08";

export const metadata: Metadata = {
  title: TITLE + " — Yvoolab",
  description: DESC,
  alternates: { canonical: URL_PATH },
  openGraph: { title: TITLE, description: DESC, type: "article" },
};

const FAQS: Array<[string, string]> = [
  [
    "行政信不理它，会自己过去吗？",
    "不会，而且多数会升级。行政机构的流程是自动的：提醒不理变催告，催告不理变强制执行（罚款加码、账户扣款）。法国行政体系认书面与期限，不认「我没看懂」。",
  ],
  [
    "拍照用翻译软件看，够吗？",
    "看懂字面够，看懂轻重不一定：软件译得出句子，译不出「这封信处在流程第几步、拖过去下一步是什么」。关键是找到期限（délai）与后果条款，这两处一旦误读，代价比翻译费大得多。",
  ],
  [
    "挂号信来了不敢签收，可以拒收吗？",
    "拒收没用，反而更糟：法律上挂号信送达即生效，拒收不影响期限起算，只让你失去了解内容的机会。该签就签，签完尽快弄清限期。",
  ],
  [
    "每月信太多，有没有省心的办法？",
    "有两条：一是养成习惯，信一到先扫期限再归类；二是找人替你盯——把信箱交给固定的人（员工、会计或代管服务），每封信当天分轻重，急件当天处理。",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESC,
      inLanguage: "zh",
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      author: { "@type": "Organization", name: "Yvoolab", url: "https://yvoolab.github.io/shanghu" },
      publisher: { "@type": "Organization", name: "Yvoolab" },
      mainEntityOfPage: "https://yvoolab.github.io" + URL_PATH,
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="hl-display mt-12 text-2xl leading-snug">{children}</h2>;
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">收到法语行政信看不懂，先看这三处</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
          Yvoolab · 发布 2026-08-08 · 适用于所有在法国经营的商户与个体户
        </p>

        <p className="mt-4 leading-relaxed">
          直接给答案：一封法语公文到手，先找三处——<strong>谁发的</strong>（信头机构名）、<strong>要你干什么</strong>（正文加粗或首段）、<strong>限期是哪天</strong>（找 <em>délai</em>、<em>avant le</em>、<em>sous X jours</em> 字样）。十秒定轻重：有期限的先办，没期限的归档。法语行政信可怕的从来不是词汇，是<strong>拖过期限后自动升级的流程</strong>。
        </p>

        <H2>哪几类信绝不能拖？</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>mise en demeure（正式催告）</strong>——不论来自行政机构还是供应商，这都是「最后通牒」级别：限期内不动，下一步就是罚款加码或法律程序。</li>
          <li><strong>带 recommandé（挂号）寄来的任何信</strong>——对方花钱留凭据，说明这封信有法律分量。</li>
          <li><strong>写着 pénalité / majoration（罚款、滞纳金）字样的</strong>——金额会随时间滚大，早一天处理早一天止损。</li>
          <li><strong>限期整改或补材料的通知</strong>——过期不补，常直接转为处罚或权利失效，且不再另行通知。</li>
        </ul>

        <H2>看得懂字面，为什么还会栽？</H2>
        <p className="mt-4 leading-relaxed">
          因为行政信是流程的一环，不是孤立的一封信。同一句「请补交材料」，出现在首次通知里不急，出现在催告里就火烧眉毛——判断轻重要知道这封信<strong>处在流程第几步</strong>。翻译软件给你字面，给不了流程位置；很多商户不是没看，是看懂了字面、误判了紧急度。
        </p>

        <H2>一套省心的处理习惯</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>信一到当天开</strong>——尤其挂号信，期限从送达起算，不从「你想起来」起算。</li>
          <li><strong>三格分类</strong>——有期限的（记进日历）、要归档的（保险、银行、年度通知）、广告扔掉。</li>
          <li><strong>回信留底</strong>——凡是回复行政机构，用挂号信或线上系统，纸面痕迹在法国就是护身符。</li>
        </ul>

        <H2>常见问题</H2>
        {FAQS.map(([q, a]) => (
          <div key={q} className="mt-6">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>{a}</p>
          </div>
        ))}

        <Divider />
        <div className="mt-4">
          <p className="hl-display text-xl leading-snug">法语公文堆一桌，不想每封都猜？</p>
          <p className="mt-3 leading-relaxed">
            拍照发来，当天用中文说明白：这封信是什么、急不急、该办什么、限期在哪。单封拆解 39 欧；法语公文月月都有的，信箱管家 119 欧/月——来信逐封替你盯着，急件当天到你手机。
          </p>
          <p className="mt-4">
            <a href="mailto:yvoolab@gmail.com?subject=法国信件拆解" className="underline underline-offset-4 font-semibold">
              把信拍照发我，先告诉你急不急。
            </a>
          </p>
          <p className="mt-3 text-sm">
            <Link href="/shanghu/zhinan" className="underline underline-offset-4">更多指南</Link>
            {" · "}
            <Link href="/shanghu" className="underline underline-offset-4">全部服务</Link>
          </p>
        </div>
      </article>
      <Footer disclaimer={DISCLAIMER} />
    </>
  );
}
