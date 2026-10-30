export type Section = { h: string; items?: string[]; text?: string };
export type Faq = { q: string; a: string };
export type Product = {
  h1: string;
  intro: string;
  more: string;
  img: { src: string; alt: string };
  sections: Section[];
  faq: Faq[];
  buy: { label: string; href: string };
  demo?: { label: string; href: string };
  jsonLd: object[];
};

export const UPDATED = "2026-10-30";

export function faqLd(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function ProductPage({ p }: { p: Product }) {
  return (
    <div>
      {p.jsonLd.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
      <section className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{p.h1}</h1>
        <p className="mt-4 text-lg text-slate-600">{p.intro}</p>
        <p className="mt-3 text-sm text-slate-600">{p.more}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={p.buy.href}
            {...ext}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            {p.buy.label}
          </a>
          {p.demo && (
            <a
              href={p.demo.href}
              {...ext}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-500"
            >
              {p.demo.label}
            </a>
          )}
        </div>
        <img
          src={p.img.src}
          alt={p.img.alt}
          width={2400}
          height={1800}
          className="mt-8 w-full rounded-lg border border-slate-200"
        />
      </section>

      {p.sections.map((s) => (
        <section key={s.h} className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">{s.h}</h2>
          {s.text && <p className="text-sm text-slate-700">{s.text}</p>}
          {s.items && (
            <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="space-y-4">
          {p.faq.map((f) => (
            <div key={f.q} className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-medium text-slate-900">{f.q}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-slate-900 p-6 text-slate-100">
        <a
          href={p.buy.href}
          {...ext}
          className="inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200"
        >
          {p.buy.label}
        </a>
        <p className="mt-4 text-xs text-slate-400">Last updated: {UPDATED}</p>
      </section>
    </div>
  );
}
