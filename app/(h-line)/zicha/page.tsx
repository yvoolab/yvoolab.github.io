import type { Metadata } from "next";
import { ServicePage } from "../_ui/ServicePage";
import { zicha } from "../_data/services";

export const metadata: Metadata = {
  title: "该拿没拿的补助、多交了的税——你有没有？",
  description: `${zicha.subtitle} 29 欧中文报告。`.slice(0, 110),
  openGraph: {
    title: "该拿没拿的补助、多交了的税——你有没有？",
    description: `${zicha.subtitle} 29 欧中文报告。`.slice(0, 110),
  },
  twitter: { card: "summary_large_image" },
};

export default function ZichaPage() {
  return (
    <ServicePage
      service={zicha}
      footerNote={{ text: "开店的朋友看这里", href: "/shanghu" }}
    />
  );
}
