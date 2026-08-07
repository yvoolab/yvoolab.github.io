import type { Metadata } from "next";
import { Divider, Footer } from "../../_ui/components";
import { DISCLAIMER } from "../../_data/copy";

export const metadata: Metadata = {
  title: "隐私政策 · Politique de confidentialité — Yvoolab",
  description:
    "Yvoolab 商户服务之个人数据处理说明（RGPD）：数据来源、用途、保存期限与您的权利。",
};

// ponytail: 纯静态双语条文页，不做手风琴/锚点导航——条文九节一屏可扫，交互是负资产
const SECTIONS_ZH: Array<[string, string]> = [
  ["谁在处理数据（责任方）", "Yvoolab（法国巴黎）。一切数据相关事宜，写信至 yvoolab@gmail.com 即可。"],
  ["处理目的", "向法国的商户提出我们的文书协助服务（B2B 商务联络），以及回应您的来信与询价。"],
  ["法律依据", "《欧盟通用数据保护条例》（RGPD）第 6.1.f 条：正当利益（intérêt légitime）——向与服务内容职业相关的商户作 B2B 联络。"],
  ["处理哪些数据", "仅商户之公开职业信息：店名、职业联系方式（邮箱、社交账号）、门店公开地址、公开评价内容。不涉及任何私人生活数据。"],
  ["数据从哪来", "均来自公开来源：您店铺自己的网站、Google 地图商家页、公开黄页与目录。我们在首次来信中亦会写明来源。"],
  ["保存多久", "自最后一次联络起至多三年（法国 CNIL 对商务联络之惯例期限）；您表示不愿再收讯息后，仅保留退订记录本身以确保不再打扰。"],
  ["谁能看到", "仅 Yvoolab 内部使用。永不出售、出租或与第三方共享。"],
  ["您的权利", "您可随时要求查阅、更正、删除您的数据，或反对我们与您联络——回信一个「停」字（或 STOP）即可，立即且永久生效。也可写信至 yvoolab@gmail.com。"],
  ["投诉渠道", "若您认为数据处理不当，可向法国数据保护局 CNIL 投诉：www.cnil.fr。"],
];

const SECTIONS_FR: Array<[string, string]> = [
  ["Responsable du traitement", "Yvoolab (Paris, France). Pour toute question : yvoolab@gmail.com."],
  ["Finalité", "Prospection commerciale B2B : proposer nos services d'assistance administrative et rédactionnelle aux commerçants en France, et répondre à vos demandes."],
  ["Base légale", "Article 6.1.f du RGPD : intérêt légitime (prospection B2B en lien avec l'activité professionnelle du destinataire)."],
  ["Données traitées", "Uniquement des informations professionnelles publiques : nom de l'établissement, coordonnées professionnelles (e-mail, réseaux sociaux), adresse publique, avis publics. Aucune donnée relevant de la vie privée."],
  ["Source des données", "Sources publiques exclusivement : site web de votre établissement, fiche Google Maps, annuaires publics. La source est également indiquée dans notre premier message."],
  ["Durée de conservation", "Trois ans au plus après le dernier contact (référentiel CNIL en matière de prospection). En cas d'opposition, seule la trace de votre refus est conservée afin de le respecter."],
  ["Destinataires", "Usage interne à Yvoolab uniquement. Aucune vente, location ni partage avec des tiers."],
  ["Vos droits", "Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Un simple « STOP » en réponse suffit — effet immédiat et définitif. Vous pouvez aussi écrire à yvoolab@gmail.com."],
  ["Réclamation", "Vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr."],
];

function SectionList({ items }: { items: Array<[string, string]> }) {
  return (
    <div className="mt-6 space-y-6">
      {items.map(([title, body], i) => (
        <section key={title}>
          <h3 className="font-semibold">
            {i + 1} · {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--hl-fg-muted)" }}>
            {body}
          </p>
        </section>
      ))}
    </div>
  );
}

export default function YinsiPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="hl-display text-3xl leading-tight sm:text-4xl">隐私政策</h1>
        <p className="mt-3 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
          最后更新：2026-08-07 · Dernière mise à jour : 07/08/2026
        </p>
        <SectionList items={SECTIONS_ZH} />
        <Divider />
        <h2 className="hl-display text-2xl leading-tight">Politique de confidentialité</h2>
        <SectionList items={SECTIONS_FR} />
      </div>
      <Footer disclaimer={DISCLAIMER} />
    </>
  );
}
