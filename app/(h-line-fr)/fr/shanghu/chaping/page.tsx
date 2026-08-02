import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, ContactLinks, SellingPoints } from "../../../../(h-line)/_ui/components";
import { mailtoWithSubject } from "../../../../(h-line)/_data/copy";
import {
  FR_CHAPING,
  FR_DISCLAIMER,
  FR_LANG_SWITCH,
  FR_META_DESCRIPTION,
  FR_STEPS,
  FR_STEPS_TITLE,
  FR_STEP_LABEL,
  FR_TRUST_ITEMS,
} from "../../../_copy";

const title = `${FR_CHAPING.title} — Yvoolab`;
const description = FR_META_DESCRIPTION;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/fr/shanghu/chaping/",
    languages: { fr: "/fr/shanghu/chaping/", "zh-CN": "/shanghu/chaping/" },
  },
  openGraph: { title, description, locale: "fr_FR" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm">
          <Link href="/shanghu/chaping" className="underline underline-offset-4" hrefLang="zh-CN">
            {FR_LANG_SWITCH}
          </Link>
        </p>

        <h1 className="hl-display mt-6 text-3xl leading-tight sm:text-4xl">{FR_CHAPING.title}</h1>
        <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          {FR_CHAPING.subtitle}
        </p>

        <div className="hl-panel mt-8 inline-flex items-baseline gap-3 rounded-full px-5 py-2 text-sm">
          <span className="hl-display text-base">{FR_CHAPING.priceChipPrimary}</span>
          <span style={{ color: "var(--hl-accent)" }}>{FR_CHAPING.priceChipSecondary}</span>
        </div>

        <CtaBlock
          href={mailtoWithSubject(FR_CHAPING.mailSubject)}
          label={FR_CHAPING.cta}
          sub={FR_CHAPING.ctaSub}
        />

        <SellingPoints points={FR_CHAPING.sellingPoints} />

        <div className="hl-hairline mt-16 border-t pt-10">
          <h2 className="hl-display text-lg">{FR_STEPS_TITLE}</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {FR_STEPS.map((s, i) => (
              <li key={s} className="hl-panel rounded-sm p-5">
                <span className="text-xs" style={{ color: "var(--hl-fg-muted)" }}>
                  {FR_STEP_LABEL(i + 1)}
                </span>
                <p className="mt-2 text-sm leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="hl-hairline mt-16 grid gap-6 border-t pt-10 sm:grid-cols-2">
          {FR_TRUST_ITEMS.map((item) => (
            <p key={item} className="text-sm leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </div>

      <footer className="mt-24 border-t hl-hairline">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <ContactLinks />
          <p className="mt-8 text-xs leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
            {FR_DISCLAIMER}
          </p>
        </div>
      </footer>
    </>
  );
}
