import type { Metadata } from "next";
import Link from "next/link";
import { Divider, Footer } from "../../../_ui/components";
import { DISCLAIMER } from "../../../_data/copy";

const TITLE = "法国餐馆 Google 差评怎么回复？模板与三条原则";
const DESC =
  "法国餐馆、美甲店、零售店的 Google 差评回复指南：48 小时内用法语回、三步结构、两条可直接改的法语模板，以及疑似恶意差评的处理办法。";
const URL_PATH = "/shanghu/zhinan/google-chaping-huifu";
const PUBLISHED = "2026-08-07";

export const metadata: Metadata = {
  title: TITLE + " — Yvoolab",
  description: DESC,
  alternates: { canonical: URL_PATH },
  openGraph: { title: TITLE, description: DESC, type: "article" },
};

const FAQS: Array<[string, string]> = [
  [
    "Google 差评能花钱删掉吗？",
    "不能。只有违反 Google 政策的评价（虚假、辱骂、竞争对手冒充顾客等）才可能通过官方举报下架。凡承诺「花钱包删」的服务都不可信，且刷好评、买好评本身违反 Google 规则，被查到反伤店铺。删不掉的差评，认真回复是店家唯一握在自己手里的主动权。",
  ],
  [
    "老板法语不好，差评怎么回？",
    "回复必须用法语写——看差评的新客人是法语读者。法语没把握，可以请店里法语好的员工把关，或找代笔服务：把差评发过去，对方写好你过目再发，不必自己硬憋。",
  ],
  [
    "两三年前的老差评还值得回吗？",
    "值得，尤其是排在前面、点「有用」人数多的那几条。新客人打开店铺页时不分新旧，一条高赞老差评空着没回，今天仍在起作用。积压的老差评可以一次集中清完。",
  ],
  [
    "好评需要回复吗？",
    "需要，但可以简短。调查显示八成顾客更愿意光顾有评必回的店——「有评必回」包括好评。好评回一两句致谢即可，重点火力留给差评。",
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

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed">{children}</p>;
}

function TemplateBlock({ title, fr, zh }: { title: string; fr: string; zh: string }) {
  return (
    <div className="mt-6 border hl-hairline p-5">
      <p className="font-semibold">{title}</p>
      <p className="mt-3 leading-relaxed" lang="fr" style={{ fontStyle: "italic" }}>
        {fr}
      </p>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
        {zh}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">法国餐馆的 Google 差评怎么回复？</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
          Yvoolab · 发布 2026-08-07 · 适用于餐馆、美甲店、按摩店、零售店
        </p>

        <P>
          直接给答案：<strong>48 小时内、用法语、按「致谢—认具体点—说改进—邀请回来」四步回</strong>，每条单独写，不要套同一段模板。差评几乎删不掉，但一条得体的回复，是写给之后每一个搜到你店的新客人看的。
        </P>

        <H2>差评不回，究竟伤在哪？</H2>
        <P>
          看差评的主力不是留差评的人，是正在决定来不来的新客人。<a href="https://www.brightlocal.com/research/local-consumer-review-survey/" className="underline underline-offset-4" rel="nofollow">BrightLocal《本地消费者评价调查》（2026）</a>给了三个数：<strong>八成</strong>顾客更愿意光顾有评必回的店；<strong>四成</strong>不愿去从不回复的店；而用套话模板回复，<strong>一半人</strong>反感。也就是说：不回在丢客人，回得敷衍同样在丢。
        </P>

        <H2>一条合格的法语回复长什么样？</H2>
        <P>四步结构，缺一不可：</P>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>致谢开头</strong>——谢对方花时间写评价，不论内容多难听。</li>
          <li><strong>认具体的点，不认全责</strong>——对方说等了 40 分钟，就回应等待这件事；不写「我们一无是处深感抱歉」。</li>
          <li><strong>说清改了什么</strong>——一句具体措施，胜过三句道歉。</li>
          <li><strong>邀请回来，或把争议移到线下</strong>——留一句「欢迎再来」或「请写信给我们细谈」，不在评论区拉锯。</li>
        </ul>

        <TemplateBlock
          title="模板一 · 菜品被批评（方括号处换成自己的）"
          fr="Bonjour, merci d'avoir pris le temps de nous écrire. Nous sommes désolés que le [plat] n'ait pas été à la hauteur ce jour-là — ce n'est pas le niveau que nous visons. Votre remarque a été transmise en cuisine et nous avons revu [le point précis]. Nous espérons avoir l'occasion de vous faire changer d'avis. — [Nom du restaurant]"
          zh="中文大意：谢谢您抽空写评价。那天的[菜]没做到位，抱歉——这不是我们想要的水准。意见已带给后厨，[具体环节]已经调整。希望有机会让您改观。"
        />
        <TemplateBlock
          title="模板二 · 服务慢、等太久"
          fr="Bonjour, merci pour votre retour. Une attente de [X] minutes, ce n'est pas normal, et nous le regrettons. Ce jour-là, [raison en quelques mots] ; nous avons depuis [mesure concrète]. Au plaisir de vous accueillir à nouveau. — [Nom]"
          zh="中文大意：谢谢您的反馈。等[X]分钟不正常，我们很抱歉。那天[一句原因，不长篇解释]；此后我们已[具体措施]。期待再次接待您。"
        />

        <H2>三条原则</H2>
        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
          <li><strong>具体</strong>——回复里必须出现对方提到的那个点。写得出「您提到的等位」，读者才信你真看了。</li>
          <li><strong>快而不急</strong>——48 小时内回，但气头上先别发：写完放半小时，删掉所有反问句再发。</li>
          <li><strong>一店一声</strong>——十条差评十条各写各的。套话模板一半读者反感，等于白回。</li>
        </ul>

        <H2>疑似恶意差评、同行刷的差评怎么办？</H2>
        <P>
          两件事并行：<strong>一边走官方举报</strong>（Google 商家后台可举报违反政策的评价：从未消费、辱骂、冒充顾客等；只有这类才可能被下架），<strong>一边照常回一条</strong>——写给旁观者看：「我们没有查到您的消费记录，如有误会请联系我们」，语气平稳即可。说实话：多数差评达不到下架标准，所以回复才是店家唯一稳握在手的工具。
        </P>

        <H2>常见问题</H2>
        {FAQS.map(([q, a]) => (
          <div key={q} className="mt-6">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>{a}</p>
          </div>
        ))}

        <Divider />
        <div className="mt-4">
          <p className="hl-display text-xl leading-snug">差评堆着没空回、法语没把握？</p>
          <p className="mt-3 leading-relaxed">
            这正是我们的活：法语回复我们写好，48 小时内到你手机，你过目再发。积压差评一次清完（10 条以内）49 欧，头两单 25 欧。
          </p>
          <p className="mt-4">
            <a
              href="mailto:yvoolab@gmail.com?subject=差评回复"
              className="underline underline-offset-4 font-semibold"
            >
              把店名发我，先免费替你写一条看看，觉得行再谈钱。
            </a>
          </p>
          <p className="mt-3 text-sm">
            <Link href="/shanghu/chaping" className="underline underline-offset-4">
              差评回复管家 · 服务详情
            </Link>
            {" · "}
            <Link href="/shanghu" className="underline underline-offset-4">
              全部服务
            </Link>
          </p>
        </div>
      </article>
      <Footer disclaimer={DISCLAIMER} />
    </>
  );
}
