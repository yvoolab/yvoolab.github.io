import Link from "next/link";
import { useId } from "react";
import type { HService, MenuCard } from "../_data/services";
import { SLOGAN, TOOLS_FOOTER_TEXT } from "../_data/copy";

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

// 验收修单 #3/#5：主钮拆分为「钮文案」+「钮下小字」两截，钮 href 单独传入
export function CtaBlock({
  href,
  label,
  sub,
}: {
  href: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="mt-8">
      <CtaButton href={href}>{label}</CtaButton>
      {sub && (
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          {sub}
        </p>
      )}
    </div>
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
      <h2 className="hl-display text-lg">怎么进行</h2>
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
        {card.external ? "联系咨询" : "点击查看详情"}
      </Link>
    </li>
  );
}

// Del 2026-07-30 亲定：联系图标改各自品牌本色实色图标（非白色玻璃质感），下缀小字名不变
// 小红书主页 URL 出处 ai-side-hustle research/xiaohongshu/stage2-headlines-sample-2026-04-25.md:15
const CONTACTS: Array<{
  label: string;
  href: string;
  external?: boolean;
  /** Instagram 需要一枚 <linearGradient> id；其余图标忽略此参数 */
  icon: (gradId: string) => React.ReactNode;
}> = [
  {
    label: "邮箱",
    href: "mailto:yvoolab@gmail.com",
    icon: () => (
      // Gmail 红信封
      <svg viewBox="0 0 24 24" aria-hidden>
        <rect x="1" y="4" width="22" height="16" rx="2.5" fill="#EA4335" />
        <path
          d="M2 5.4 12 13l10-7.6"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/yvoolab",
    external: true,
    icon: () => (
      // Facebook 蓝圆底白 f
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="#1877F2" />
        <path
          d="M14.7 8.6h-1.4c-.5 0-.9.4-.9.9v1.5h2.2l-.3 2.2h-1.9V19h-2.3v-5.8H8.7v-2.2h1.7V9.2c0-1.7 1.1-2.9 2.7-2.9h1.9v2.3z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yvoolab",
    external: true,
    icon: (gradId) => (
      // 官方渐变圆角方框 + 白色相机纹
      <svg viewBox="0 0 24 24" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0" y1="24" x2="24" y2="0">
            <stop offset="0" stopColor="#F58529" />
            <stop offset="0.5" stopColor="#DD2A7B" />
            <stop offset="1" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="22" height="22" rx="6" fill={`url(#${gradId})`} />
        <rect x="6.5" y="6.5" width="11" height="11" rx="3" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "小红书",
    href: "https://www.xiaohongshu.com/user/profile/5572a33a8a75e12cefdef9a2",
    external: true,
    icon: () => (
      // 小红书红圆角横排底 + 白字
      <svg viewBox="0 0 24 24" aria-hidden>
        <rect x="1" y="6" width="22" height="12" rx="3" fill="#FF2442" />
        <text
          x="12"
          y="14.7"
          textAnchor="middle"
          fontSize="6.4"
          fill="#fff"
          stroke="none"
          fontFamily="inherit"
        >
          小红书
        </text>
      </svg>
    ),
  },
];

// 验收修单 #11：页脚抽成可传参组件，让 /zicha 能传入不同免责声明文本而不复制整段页脚
export function Footer({ disclaimer, showBrand = true }: { disclaimer: string; showBrand?: boolean }) {
  return (
    <footer className="mt-24 border-t hl-hairline">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {showBrand && <p className="hl-display text-2xl leading-snug">{SLOGAN}</p>}
        {showBrand && <ContactLinks className="mt-4" />}
        <p className="mt-3 text-sm">
          <Link href="/tools" className="underline underline-offset-4">
            {TOOLS_FOOTER_TEXT}
          </Link>
        </p>
        <p className="mt-8 text-xs leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
          {disclaimer}
        </p>
      </div>
    </footer>
  );
}

export function ContactLinks({ className = "" }: { className?: string }) {
  // ContactLinks 在同一页可渲染两次（/shanghu hero + 页脚），Instagram 的
  // <linearGradient> id 须逐实例唯一，否则重复 id 违规；useId() 结果含冒号，
  // 用作 url(#id) 引用前须去掉。
  const gradId = "hl-ig-" + useId().replace(/:/g, "");
  return (
    <div className={`flex flex-wrap items-start gap-7 ${className}`}>
      {CONTACTS.map((c) => (
        <a
          key={c.href}
          href={c.href}
          aria-label={c.label}
          className="group flex flex-col items-center gap-1.5 no-underline hover:opacity-75"
          style={{ color: "var(--hl-fg)" }}
          {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <span className="block h-7 w-7">{c.icon(gradId)}</span>
          <span className="text-xs" style={{ color: "var(--hl-fg-muted)" }}>
            {c.label}
          </span>
        </a>
      ))}
    </div>
  );
}
