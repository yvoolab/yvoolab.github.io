import type { Metadata } from "next";
import Link from "next/link";
import { Divider, Footer } from "../../../_ui/components";
import { DISCLAIMER } from "../../../_data/copy";

const TITLE = "法国商户能申哪些补贴？先弄清三件事";
const DESC =
  "在法国开店的商户找补贴指南：官方补贴信息去哪查（aides-territoires 等官方渠道）、申请前先弄清的三件事、怎么识别「包办补贴」的坑。";
const URL_PATH = "/shanghu/zhinan/shanghu-butie";
const PUBLISHED = "2026-08-08";

export const metadata: Metadata = {
  title: TITLE + " — Yvoolab",
  description: DESC,
  alternates: { canonical: URL_PATH },
  openGraph: { title: TITLE, description: DESC, type: "article" },
};

const FAQS: Array<[string, string]> = [
  [
    "有没有「一定能拿到」的补贴？",
    "没有。任何补贴都有各自的条件（行业、注册形态、地区、时点），条件是否满足要拿你的实际情况对照官方条文——凡开口就保证「你肯定能领」的，要么没看条文，要么在赚你别的钱。",
  ],
  [
    "找中介代办补贴，抽成合理吗？",
    "市面上有开口几千欧还按到账金额抽成的。你可以先想一步：申请材料的主体工作是把你自己的经营信息按官方要求整理成文——这一步找人代笔是买时间，按件付费合理；按补贴金额抽成，等于把你的钱按比例分走。",
  ],
  [
    "补贴信息去哪查最靠谱？",
    "认官方渠道：aides-territoires.beta.gouv.fr 汇总全法各级公共补贴，可按地区与行业筛；你所在的 CCI（工商会）与 CMA（手工业协会）也有针对本地商户的项目。第三方文章可以当线索，申请前一律回到官方页面核对条件与截止日。",
  ],
  [
    "申请一定要用法语吗？",
    "是，材料与表格都是法语。但这不该成为放弃的理由：条件核对与文字准备都可以找人帮，最终提交仍是你自己的名义与账户——补贴到账不经过任何中间人，才是干净的路。",
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
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">法国商户找补贴，先弄清三件事</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
          Yvoolab · 发布 2026-08-08 · 适用于已注册公司或个体的商户
        </p>

        <p className="mt-4 leading-relaxed">
          直接给答案：法国面向商户的公共补贴确实存在——数字化转型、门面改造、节能设备、招聘培训等方向都有——但<strong>没有一项是「人人有份」</strong>。少走弯路的办法是先弄清三件事：<strong>你的注册形态、你的行业代码（APE）、你所在的地区</strong>。几乎所有补贴的条件都围绕这三样筛人。
        </p>

        <H2>去哪查？只认官方</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li>
            <a href="https://aides-territoires.beta.gouv.fr" className="underline underline-offset-4" rel="nofollow">aides-territoires.beta.gouv.fr</a>
            ——政府官方汇总平台，全法各级公共补贴按地区、行业、用途可筛。
          </li>
          <li><strong>你所在的 CCI（工商会）/ CMA（手工业协会）</strong>——本地项目常只在这里公示，且有免费咨询窗口。</li>
          <li><strong>大区（Région）官网的企业版块</strong>——大区是商户补贴的主要出资方之一。</li>
        </ul>
        <p className="mt-4 leading-relaxed">
          第三方文章、社群转帖只当线索用——补贴有截止日、预算池会用尽，申请前一律回官方页面核对<strong>当下</strong>的条件与期限。
        </p>

        <H2>申请前的三个自查</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>条件我真的对得上吗？</strong>——逐条对照官方条文，模糊处直接问发放机构，别靠猜。</li>
          <li><strong>要投入多少时间？</strong>——多数申请要经营数据、报价单、动机说明；材料不全是被拒的头号原因。</li>
          <li><strong>钱什么时候到？</strong>——不少补贴是「先花后补」（remboursement），要垫资；现金紧张的店要把这算进去。</li>
        </ul>

        <H2>怎么识别「包办补贴」的坑</H2>
        <p className="mt-4 leading-relaxed">
          三个信号：开口保证「肯定能领」、收费按补贴金额抽成、让你把回款账户设成他的。补贴申请没有内部渠道，材料谁都替你写得了，<strong>批不批只看条件与材料</strong>——把「代办」买成「代笔」，按件付费、自己提交、钱直接到自己账上，才是干净的路。
        </p>

        <H2>常见问题</H2>
        {FAQS.map(([q, a]) => (
          <div key={q} className="mt-6">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>{a}</p>
          </div>
        ))}

        <Divider />
        <div className="mt-4">
          <p className="hl-display text-xl leading-snug">条文太多，不想自己一条条啃？</p>
          <p className="mt-3 leading-relaxed">
            这正是我们的活：把你能对上号的官方申请条件整理成中文清单给你，你自己拿主意——初查 49 欧；要申的话，申请书文字草稿代拟 99 欧起/项，你自己提交。不抽成。
          </p>
          <p className="mt-4">
            <a href="mailto:yvoolab@gmail.com?subject=商户找补贴" className="underline underline-offset-4 font-semibold">
              把你的行业和注册形态发我，先告诉你值不值得查。
            </a>
          </p>
          <p className="mt-3 text-sm">
            <Link href="/shanghu/butie" className="underline underline-offset-4">商户找补贴 · 服务详情</Link>
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
