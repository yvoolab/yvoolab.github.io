import type { Metadata } from "next";
import { ContactLinks, CtaBlock, Divider, MenuCardItem } from "../_ui/components";
import { oneTimeCards, persistentCard } from "../_data/services";
import {
  DIAGNOSIS_CTA_LABEL,
  DIAGNOSIS_FULL_INVITE,
  DIAGNOSIS_CTA_SUB,
  DIAGNOSIS_MAIL_SUBJECT,
  EXTRA_LINE,
  FRENCH_LABEL,
  FRENCH_SUMMARY,
  HALF_PRICE_BANNER,
  SHANGHU_HERO_SUBHEAD,
  SHANGHU_HERO_TITLE_LINE1,
  SHANGHU_HERO_TITLE_LINE2,
  TRUST_ITEMS,
  mailtoWithSubject,
} from "../_data/copy";

export const metadata: Metadata = {
  title: "用得起的 AI，听得懂您的 Yvoolab",
  description: "巴黎华人商户 AI 文书协助——差评回复、催款信、法语公文、找补贴。头两单半价。",
  openGraph: {
    title: "用得起的 AI，听得懂您的 Yvoolab",
    description: "巴黎华人商户 AI 文书协助——差评回复、催款信、法语公文、找补贴。头两单半价。",
  },
  twitter: { card: "summary_large_image" },
};

export default function ShanghuPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* 1 · Hero */}
      <section id="zhenduan">
        <h1 className="hl-display text-4xl leading-tight sm:text-5xl">
          {SHANGHU_HERO_TITLE_LINE1}
          <br />
          {SHANGHU_HERO_TITLE_LINE2}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          {SHANGHU_HERO_SUBHEAD}
        </p>
        <CtaBlock
          href={mailtoWithSubject(DIAGNOSIS_MAIL_SUBJECT)}
          label={DIAGNOSIS_CTA_LABEL}
          sub={DIAGNOSIS_CTA_SUB}
        />
        <p className="mt-5 max-w-2xl text-base leading-relaxed">
          {DIAGNOSIS_FULL_INVITE}
        </p>
        <ContactLinks className="mt-6" />
      </section>

      <Divider />

      {/* 2 · 半价横幅 */}
      <section className="hl-panel rounded-sm px-8 py-6">
        <p className="hl-display text-2xl" style={{ color: "var(--hl-accent)" }}>
          {HALF_PRICE_BANNER}
        </p>
      </section>

      <Divider />

      {/* 3 · 服务卡两组 */}
      <section>
        <h2 className="hl-display text-2xl">持续看护</h2>
        <ul className="mt-6 grid gap-4">
          <MenuCardItem card={persistentCard} />
        </ul>

        <h2 className="hl-display mt-16 text-2xl">一次性修缮</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {oneTimeCards.map((c) => (
            <MenuCardItem key={c.title} card={c} />
          ))}
        </ul>
      </section>

      <Divider />

      {/* 4 · 红线信任块 */}
      <section className="grid gap-6 sm:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <p key={item} className="hl-hairline border-t pt-4 text-sm leading-relaxed">
            {item}
          </p>
        ))}
      </section>

      <Divider />

      {/* 5 · 另有一行 */}
      <section>
        <p className="text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          {EXTRA_LINE}
        </p>
      </section>

      <Divider />

      {/* 6 · En français 摘要段 */}
      <section className="text-sm">
        <span className="hl-display italic" style={{ color: "var(--hl-fg-muted)" }}>
          {FRENCH_LABEL}
        </span>{" "}
        <span style={{ color: "var(--hl-fg-muted)" }}>{FRENCH_SUMMARY}</span>
      </section>
    </div>
  );
}
