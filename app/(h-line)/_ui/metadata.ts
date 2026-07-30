import type { Metadata } from "next";
import type { HService } from "../_data/services";

// spec §3: H 线服务页 og:title = `<海报主标> — Yvoolab`；og:description = 副标原文（截 110 内）＋价
export function serviceMetadata(service: HService): Metadata {
  const title = `${service.title} — Yvoolab`;
  const priceText = service.priceChipSecondary
    ? `${service.priceChipPrimary}，${service.priceChipSecondary}。`
    : `${service.priceChipPrimary}。`;
  let description = `${service.subtitle} ${priceText}`;
  if (description.length > 110) description = description.slice(0, 109) + "…";
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: "summary_large_image" },
  };
}
