import Link from "next/link";
import type { HService, MenuCard } from "../_data/services";

export function Divider() {
  return <hr className="hl-hairline my-16 border-t" />;
}

export function PriceChip({ service }: { service: HService }) {
  return (
    <div className="hl-panel inline-flex items-baseline gap-3 rounded-full px-5 py-2 text-sm">
      <span className="hl-display text-base">{service.priceChipPrimary}</span>
      {service.priceChipSecondary && (
        <span style={{ color: "var(--hl-accent)" }}>{service.priceChipSecondary}</span>
      )}
    </div>
  );
}

export function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hl-cta inline-block rounded-sm px-7 py-4 text-sm font-medium tracking-wide"
    >
      {children}
    </Link>
  );
}

export function SellingPoints({ points }: { points: readonly string[] }) {
  return (
    <ul className="mt-10 space-y-6">
      {points.map((p, i) => (
        <li key={i} className="hl-hairline border-t pt-6 text-base leading-relaxed">
          {p}
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({ subject }: { subject: string }) {
  const steps = [
    `您发：${subject}`,
    "AI 打草稿、我把关",
    "您确认后才发出",
  ];
  return (
    <div className="hl-hairline mt-16 border-t pt-10">
      <h2 className="hl-display text-lg" style={{ color: "var(--hl-accent)" }}>
        怎么进行
      </h2>
      <ol className="mt-6 grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={i} className="hl-panel rounded-sm p-5">
            <span className="text-xs" style={{ color: "var(--hl-fg-muted)" }}>
              第 {i + 1} 步
            </span>
            <p className="mt-2 text-sm leading-relaxed">{s}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function OtherServices({ current }: { current: HService[] }) {
  return (
    <div className="hl-hairline mt-16 border-t pt-10">
      <h2 className="hl-display text-lg">其他服务</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {current.map((s) => (
          <li key={s.slug} className="hl-panel rounded-sm p-4">
            <Link href={s.path} className="text-sm hover:underline">
              {s.title}
            </Link>
            <p className="mt-1 text-xs" style={{ color: "var(--hl-fg-muted)" }}>
              {s.priceChipPrimary}
            </p>
          </li>
        ))}
      </ul>
      <Link
        href="/shanghu"
        className="mt-6 inline-block text-sm underline underline-offset-4"
      >
        全部服务
      </Link>
    </div>
  );
}

export function MenuCardItem({ card }: { card: MenuCard }) {
  return (
    <li className="hl-panel rounded-sm p-6">
      <h3 className="hl-display text-lg">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
        {card.body}
      </p>
      <p className="mt-4 text-sm">{card.price}</p>
      <Link
        href={card.href}
        className="mt-4 inline-block text-sm underline underline-offset-4"
      >
        {card.external ? "联系咨询" : "查看详情"}
      </Link>
    </li>
  );
}
