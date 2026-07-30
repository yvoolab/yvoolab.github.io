import Link from "next/link";
import type { HService } from "../_data/services";
import { services } from "../_data/services";
import { CtaButton, OtherServices, PriceChip, ProcessSteps, SellingPoints } from "./components";
import { DIAGNOSIS_LINK_TEXT } from "../_data/copy";

export function ServicePage({
  service,
  frenchTagline,
  footerNote,
}: {
  service: HService;
  /** 一句法语定位行 (spec §2 服务页·"候 Del" 措辞) — 未定稿时留空,不编造商务文案 */
  frenchTagline?: string;
  /** /zicha 专用页脚回链措辞 */
  footerNote?: { text: string; href: string };
}) {
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Hero */}
      <h1 className="hl-display text-4xl leading-tight sm:text-5xl">{service.title}</h1>
      <p className="mt-6 text-lg leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
        {service.subtitle}
      </p>
      {frenchTagline && (
        <p className="mt-3 text-sm italic" style={{ color: "var(--hl-fg-muted)" }}>
          {frenchTagline}
        </p>
      )}

      <div className="mt-8">
        <PriceChip service={service} />
      </div>

      <div className="mt-8">
        <CtaButton href="#cta">{service.cta}</CtaButton>
      </div>

      <p className="mt-5 text-sm">
        <Link href="/shanghu#zhenduan" className="underline underline-offset-4">
          {DIAGNOSIS_LINK_TEXT}
        </Link>
      </p>

      {/* 卖点三行 */}
      <SellingPoints points={service.sellingPoints} />

      {/* 怎么进行三步 */}
      <ProcessSteps subject={service.ctaSubject} />

      {/* 其他服务 */}
      <OtherServices current={others} />

      {footerNote && (
        <p className="mt-10 text-sm">
          <Link href={footerNote.href} className="underline underline-offset-4">
            {footerNote.text}
          </Link>
        </p>
      )}

      <p id="cta" className="sr-only">
        {service.cta}
      </p>
    </div>
  );
}
