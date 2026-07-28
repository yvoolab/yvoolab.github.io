import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Yvoo Lab",
  description:
    "Async-only AI-augmented product development. SaaS MVPs, RAG, data pipelines, dashboards, Notion AI workspaces. Paris CET. EN/FR/ZH.",
};

const services = [
  {
    name: "SaaS MVP",
    price: "$1k – $3k",
    turnaround: "2–4 weeks",
    desc: "Next.js + Supabase + Stripe + auth. From landing page to working product with payments.",
  },
  {
    name: "AI Integration",
    price: "$500 – $2k",
    turnaround: "1–2 weeks",
    desc: "RAG, chatbots, agents on Claude / OpenAI API. Tool calling, structured output, streaming.",
  },
  {
    name: "Data Pipeline",
    price: "$300 – $1.5k",
    turnaround: "3–7 days",
    desc: "Python automation. Notion API, Google Sheets, Stripe, scraping, cron jobs, webhooks.",
  },
  {
    name: "Analytics Dashboard",
    price: "$500 – $1.5k",
    turnaround: "1–2 weeks",
    desc: "Plotly, Streamlit, or Looker Studio. Data ingestion + cleaning + visual reports.",
  },
  {
    name: "Notion AI Workspace",
    price: "$200 – $800",
    turnaround: "3–5 days",
    desc: "Custom databases, prompts library, SOPs, Claude/OpenAI API automations.",
  },
];

const proof = [
  {
    title: "AI-Augmented Notion Workspace",
    note: "51 prompts + 8 DBs + 12 SOPs. Live on Gumroad.",
    href: "https://yvoo.gumroad.com/l/ai-notion-workspace",
  },
  {
    title: "Industrial revenue prediction (Dataiku)",
    note: "Two segmented ML models on multi-year CRM + finance data. 89–90% model accuracy. (Client NDA.)",
  },
  {
    title: "Kaggle House Prices regression",
    note: "Public LB RMSLE 0.13543.",
    href: "https://www.kaggle.com/delphine53303",
  },
  {
    title: "Open-source Claude Code tooling",
    note: "5 public repos on GitHub: caveman skill, Windows hook, session sharing, voice input, dotfiles.",
    href: "https://github.com/yvoolab",
  },
];

const workflow = [
  "Email me your scope and goal — 50 words is enough.",
  "Async Loom reply within 24h (CET).",
  "Fixed price. 50% upfront via Stripe invoice. No estimates that drift.",
  "Daily Loom update + GitHub commits. No status meetings, no Zoom.",
  "Delivery on agreed date. 7-day refund window if no commits land.",
];

const faq = [
  {
    q: "Why no meetings?",
    a: "I write code, you read commits. A 30-minute Zoom for a problem solvable in two Loom videos is a tax on both of us.",
  },
  {
    q: "What about time zones?",
    a: "I work Paris CET. I reply within 24h. If you need same-hour sync, I'm the wrong person.",
  },
  {
    q: "What languages do you work in?",
    a: "EN, FR, ZH — all async. Code is in English regardless.",
  },
  {
    q: "Stack?",
    a: "Next.js / React / TypeScript / Python / Supabase / Postgres / Stripe / Vercel / Notion API / Claude API / OpenAI API. I match your stack when it makes sense.",
  },
  {
    q: "Refund policy?",
    a: "7-day full refund if no commits land in your repo. After delivery, no refund — but I fix what's broken.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Standard mutual NDAs, yes. Solo founder NDAs that demand exclusivity or IP assignment for life, no.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          I ship AI-powered products in days, async.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          SaaS MVPs · RAG · Data pipelines · Notion API · Stripe.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Paris CET · EN/FR/ZH · No meetings, no bloat.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:yvoolab@gmail.com?subject=Project%20scope"
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Email yvoolab@gmail.com
          </a>
          <a
            href="https://github.com/yvoolab"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-500"
          >
            See portfolio →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">What I build</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="text-sm font-medium text-slate-700">
                  {s.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-3 text-xs text-slate-500">
                Turnaround: {s.turnaround}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Price bands are starting points. Final quote depends on scope.
          Not listed here? Email me — odds are I do it.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Proof</h2>
        <ul className="space-y-3">
          {proof.map((p) => (
            <li
              key={p.title}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 hover:underline"
                >
                  {p.title} ↗
                </a>
              ) : (
                <span className="font-medium text-slate-900">{p.title}</span>
              )}
              <p className="mt-1 text-sm text-slate-600">{p.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">How we work</h2>
        <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-700">
          {workflow.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div
              key={item.q}
              className="rounded-lg border border-slate-200 bg-white p-4"
            >
              <p className="font-medium text-slate-900">{item.q}</p>
              <p className="mt-1 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg bg-slate-900 p-6 text-slate-100">
        <p className="text-lg font-medium">Got a scope in your head?</p>
        <p className="mt-2 text-sm text-slate-300">
          Send a 50-word email. I'll reply within 24h CET with a fixed price or
          a one-question follow-up. No discovery calls.
        </p>
        <a
          href="mailto:yvoolab@gmail.com?subject=Project%20scope"
          className="mt-4 inline-block rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200"
        >
          Email yvoolab@gmail.com
        </a>
      </section>
    </div>
  );
}
