import type { Metadata } from "next";
import ProductPage, { faqLd, type Faq, type Product } from "../product-page";

const URL = "https://yvoolab.github.io/products/airbnb-welcome-guide/";
const intro =
  "Airbnb welcome book template in English, French and Spanish, for hosts whose guests skim and miss the basics.";
const more =
  "Wi-Fi, check-in, door code and the emergency number are on page one. You get nine files you upload to your free Canva account, where each becomes a design you can edit: a phone guide, an A4 card and an A5 sign with a space for your QR code, in each language. Plus a PDF that shows how, in five steps.";

export const metadata: Metadata = {
  title: "Airbnb Welcome Book Template in English, French and Spanish — Yvoo Lab",
  description: intro,
  alternates: { canonical: URL },
};

const faq: Faq[] = [
  { q: "Do I need Canva Pro?", a: "No. The files open in a free Canva account." },
  { q: "Can I use only one language?", a: "Yes. Each language is a separate set of three files." },
  {
    q: "Is it hard to edit?",
    a: "Two fonts, sizes already set. Click a line of text and type. The PDF walks you through five steps.",
  },
];

const p: Product = {
  h1: "Airbnb Welcome Book Template in English, French and Spanish, Editable in Canva",
  intro,
  more,
  img: {
    src: "/products/airbnb-welcome-guide-hero.png",
    alt: "Airbnb welcome guide phone page one with Wi-Fi, check-in, check-out, door code, emergency number and address, beside the A4 card and A5 sign, example details",
  },
  sections: [
    {
      h: "What is inside",
      items: [
        "Phone guide, 6 pages: arrival essentials, house notes, kitchen and appliances, getting around, local favourites, before you leave.",
        "A4 essentials card: Wi-Fi, check-in and check-out, door code, emergency number and address on one page, with space for a small QR code.",
        "A5 welcome sign: space for a QR code to your phone guide, with the Wi-Fi name and password.",
        "Each piece in English, French and Spanish, written for each language.",
        "Friendly sample wording throughout. Change the names and details to yours.",
      ],
    },
    {
      h: "What you get",
      items: [
        "Welcome-Guide-Files.zip: nine files, named by language and piece.",
        "Welcome-Guide-Start-Here.pdf: the file list, five steps to make it yours, and a message to send guests the link, in each language.",
      ],
    },
    {
      h: "How it works",
      text: "Unzip the folder. In Canva, press Upload and choose a file. Change the text, share the phone guide with a public view link, add a QR code with that link on the sign and card (a free QR app in Canva Apps, or any other), then print with Fit to page.",
    },
    {
      h: "Good to know",
      items: [
        "Digital download. Nothing is shipped.",
        "Canva is a separate service and needs an internet connection.",
        "For your own rentals. Please do not share or resell the files.",
        "Made by Yvoo. Built with the help of AI tools, then checked page by page before release.",
      ],
    },
  ],
  faq,
  buy: { label: "Buy on Etsy (€9.90)", href: "https://www.etsy.com/listing/4605829835" },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Airbnb Welcome Book Template in English, French and Spanish",
      description: intro + " " + more,
      image: "https://yvoolab.github.io/products/airbnb-welcome-guide-hero.png",
      url: URL,
      brand: { "@type": "Brand", name: "Yvoo" },
      offers: {
        "@type": "Offer",
        price: "9.90",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://www.etsy.com/listing/4605829835",
      },
    },
    faqLd(faq),
  ],
};

export default function Page() {
  return <ProductPage p={p} />;
}
