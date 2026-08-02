import { ServicePage } from "../../_ui/ServicePage";
import { serviceMetadata } from "../../_ui/metadata";
import { findService } from "../../_data/services";
import { ZH_LANG_SWITCH } from "../../../(h-line-fr)/_copy";

const service = findService("chaping")!;

// Le lien envoyé en message privé le 2026-08-01 pointe ici, y compris pour les
// prospects démarchés en français : la bascule de langue doit être en haut de page.
export const metadata = {
  ...serviceMetadata(service),
  alternates: {
    canonical: "/shanghu/chaping/",
    languages: { "zh-CN": "/shanghu/chaping/", fr: "/fr/shanghu/chaping/" },
  },
};

export default function Page() {
  return (
    <ServicePage
      service={service}
      langSwitch={{ text: ZH_LANG_SWITCH, href: "/fr/shanghu/chaping", hrefLang: "fr" }}
    />
  );
}
