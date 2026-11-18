import type { Metadata } from "next";
import Link from "next/link";
import { CtaBlock, ContactLinks } from "./components";
import { mailtoWithSubject } from "../_data/copy";
import type { PeixunCopy } from "../_data/peixun";

export function peixunMetadata(c: PeixunCopy): Metadata {
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: c.path,
      languages: c.lang === "zh"
        ? { "zh-CN": c.path, fr: c.altPath }
        : { fr: c.path, "zh-CN": c.altPath },
    },
    openGraph: { title: c.metaTitle, description: c.metaDescription, locale: c.lang === "zh" ? "zh_CN" : "fr_FR" },
    twitter: { card: "summary_large_image" },
  };
}

const muted = { color: "var(--hl-fg-muted)" };

export function PeixunPage({ c }: { c: PeixunCopy }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm">
          <Link href={c.altPath} className="underline underline-offset-4" hrefLang={c.lang === "zh" ? "fr" : "zh-CN"}>
            {c.altLabel}
          </Link>
        </p>

        <h1 className="hl-display mt-6 text-3xl leading-tight sm:text-4xl">{c.title}</h1>
        <p className="mt-6 text-lg leading-relaxed" style={muted}>{c.subtitle}</p>

        <CtaBlock href={c.ctaHref} label={c.cta} sub={c.ctaSub} />

        <div className="hl-hairline mt-16 border-t pt-10">
          <h2 className="hl-display text-lg">{c.compareTitle}</h2>
          <dl className="mt-6 space-y-5">
            {c.compare.map((r) => (
              <div key={r.k} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-4">
                <dt className="hl-display text-base">{r.k}</dt>
                <dd className="text-base leading-relaxed">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hl-hairline mt-16 border-t pt-10">
          <h2 className="hl-display text-lg">{c.menuTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed" style={muted}>{c.menuNote}</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {c.menu.map((m, i) => (
              <li key={m.name} className="hl-panel rounded-sm p-5">
                <p className="text-xs" style={muted}>
                  {i + 1} · {m.hours}
                  {m.required && <> · {c.requiredTag}</>}
                </p>
                <p className="hl-display mt-2 text-base">{m.name}</p>
                <p className="mt-1 text-sm leading-relaxed">{m.does}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed">{c.extra}</p>
          <p className="mt-2 text-sm leading-relaxed" style={muted}>{c.priceLine}</p>
        </div>

        <div className="hl-hairline mt-16 border-t pt-10">
          <h2 className="hl-display text-lg">{c.stepsTitle}</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {c.steps.map((s, i) => (
              <li key={s} className="hl-panel rounded-sm p-5">
                <span className="text-xs" style={muted}>{c.stepLabel(i + 1)}</span>
                <p className="mt-2 text-sm leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="hl-hairline mt-16 grid gap-6 border-t pt-10 sm:grid-cols-2">
          {c.trust.map((t) => (
            <p key={t} className="text-sm leading-relaxed">{t}</p>
          ))}
        </div>

        <CtaBlock href={c.ctaHref} label={c.cta} />
        <p className="mt-4 text-sm">
          <a href={mailtoWithSubject(c.mailSubject)} className="underline underline-offset-4">{c.mailLabel}</a>
        </p>
      </div>

      <footer className="mt-24 border-t hl-hairline">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <ContactLinks />
        </div>
      </footer>
    </>
  );
}
