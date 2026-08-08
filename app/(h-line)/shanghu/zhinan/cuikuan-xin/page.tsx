import type { Metadata } from "next";
import Link from "next/link";
import { Divider, Footer } from "../../../_ui/components";
import { DISCLAIMER } from "../../../_data/copy";

const TITLE = "法国客户欠款不还怎么办？法语催款信的写法与节奏";
const DESC =
  "在法国做批发、装修、上门服务的华人商户催款指南：催款分三步（relance、mise en demeure、法律程序）、每步的法语信怎么写、措辞怎样既收得回钱又不伤客情。";
const URL_PATH = "/shanghu/zhinan/cuikuan-xin";
const PUBLISHED = "2026-08-08";

export const metadata: Metadata = {
  title: TITLE + " — Yvoolab",
  description: DESC,
  alternates: { canonical: URL_PATH },
  openGraph: { title: TITLE, description: DESC, type: "article" },
};

const FAQS: Array<[string, string]> = [
  [
    "催款信要用挂号信寄吗？",
    "第一步的友好提醒（relance）用邮件即可，留下书面痕迹就行。到了正式催告（mise en demeure）这一步，要用带回执的挂号信（lettre recommandée avec accusé de réception）——它是后续法律程序的凭据，寄出日期和签收记录都算数。",
  ],
  [
    "客户是老关系，催款会不会把人得罪跑？",
    "写得对就不会。友好提醒的口吻是「想必是疏忽了」，不是「你欠钱不还」；把付款方式和发票号一并附上，让对方顺手就能办。真正伤关系的往往不是催款本身，而是拖到忍无可忍后语气失控的那一封。",
  ],
  [
    "对方一直不理，法律程序贵不贵？",
    "对无争议的欠款，法国有一个相对简便的程序叫支付令（injonction de payer），向商事法庭提交，费用不高、不一定要请律师。走到这一步前，一封措辞得当的 mise en demeure 常常就够了——多数欠款方看到带回执的挂号信就会处理。",
  ],
  [
    "报价单（devis）跟催款有什么关系？",
    "关系很大：催款的底气来自当初的书面凭据。法国的 devis 有法定必备项，签了字的合规 devis 加上发票，欠款的事实就无可争辩；凭据不全，催款信再漂亮也硬不起来。",
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
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">法国客户欠款不还，催款信怎么写？</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
          Yvoolab · 发布 2026-08-08 · 适用于批发、装修、上门服务等赊账生意
        </p>

        <p className="mt-4 leading-relaxed">
          直接给答案：法国的催款走<strong>三步</strong>——先发<strong>友好提醒</strong>（relance amiable，邮件即可），不理则发<strong>正式催告</strong>（mise en demeure，带回执挂号信），再不理才走<strong>法律程序</strong>（支付令等）。每一步的信都有讲究：写软了收不回钱，写硬了跑掉老客户。在法国，发票平均要被拖上十四天才结——多数时候，问题出在催款信要么没发、要么发得不是时候。
        </p>

        <H2>第一步：友好提醒（relance amiable）</H2>
        <p className="mt-4 leading-relaxed">
          到期后一到两周内发。口吻是「想必是疏忽了」：一句提醒 + 发票号与金额 + 付款方式 + 「如已付款请忽略」。附上原发票，让对方顺手就能办。多数欠款到这一步就收回了——前提是你真的发了。
        </p>
        <p className="mt-3 leading-relaxed" lang="fr" style={{ fontStyle: "italic" }}>
          Sauf erreur de notre part, la facture n° [X] du [date], d'un montant de [X] €, reste à ce jour impayée. Il s'agit sans doute d'un oubli — vous trouverez la facture en pièce jointe. Si votre règlement est déjà parti, merci de ne pas tenir compte de ce message.
        </p>

        <H2>第二步：正式催告（mise en demeure）</H2>
        <p className="mt-4 leading-relaxed">
          第一封发出两三周仍无动静，就该升级。用<strong>带回执的挂号信</strong>寄，信里明确三样：欠款事实（发票号、金额、到期日）、限期付款（通常八至十五天）、逾期后果（启动法律程序、计逾期利息）。语气平稳、字字有据——这封信本身就是日后程序里的证据。
        </p>

        <H2>第三步：法律程序</H2>
        <p className="mt-4 leading-relaxed">
          对无争议的欠款，支付令（injonction de payer）是最常用的一条：向商事法庭提交表格与凭据，费用不高，不一定要请律师。但走到这一步的前提是<strong>凭据齐全</strong>——签字的报价单（devis）、发票、催告信回执。法国的 devis 有法定必备项，缺项不仅可能挨罚，欠款争议时也少一层底气。
        </p>

        <H2>三条经验</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>按节奏来，别跳步</strong>——上来就发狠信，老客户直接跑掉；一直只发软信，欠款方知道你不会认真。</li>
          <li><strong>每封信都留痕</strong>——邮件、挂号信回执都存好，口头催款一百次不如书面一次。</li>
          <li><strong>金额写全</strong>——本金之外，逾期利息与固定追偿费在法国是有法可依的，信里点到，对方就知道拖下去不划算。</li>
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
          <p className="hl-display text-xl leading-snug">催款信不想自己憋？</p>
          <p className="mt-3 leading-relaxed">
            你口述欠款情况，法语催款信我们替你写——首催、跟进、正式催告，措辞有分寸不伤客情。催款信 19 欧一封；法国报价单（devis）法定项目一次配齐，模板套装 99 欧。
          </p>
          <p className="mt-4">
            <a href="mailto:yvoolab@gmail.com?subject=催款信" className="underline underline-offset-4 font-semibold">
              把欠款情况发我，先告诉你这笔该走哪一步。
            </a>
          </p>
          <p className="mt-3 text-sm">
            <Link href="/shanghu/baojia" className="underline underline-offset-4">报价单 + 催款信 · 服务详情</Link>
            {" · "}
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
