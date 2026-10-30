import type { Metadata } from "next";
import ProductPage, { faqLd, type Faq, type Product } from "../product-page";

const URL = "https://yvoolab.github.io/products/notion-life-planner/";
const intro = "A Notion life planner for anyone whose dashboard got too busy to use.";
const more =
  "Your day, your month and your goals on one home page, the rest one click away. Plain Notion pages and databases: no widgets or embeds that can stop working. Two editions, one with examples and one blank, so there is nothing to clear out first.";

export const metadata: Metadata = {
  title: "Notion Life Planner Template: One Calm Home Page — Yvoo Lab",
  description: intro + " Your day, your month and your goals on one home page, the rest one click away.",
  alternates: { canonical: URL },
};

const faq: Faq[] = [
  { q: "Do I need a paid Notion plan?", a: "No. A free Notion account is enough." },
  { q: "Will the widgets break later?", a: "There are none. Everything is a standard Notion page or database." },
  { q: "Do I have to delete sample data first?", a: "No. Take the blank edition and start clean." },
];

const p: Product = {
  h1: "Notion Life Planner Template: One Calm Home Page for Your Day, Goals, Habits and Money",
  intro,
  more,
  img: {
    src: "/products/notion-life-planner-hero.png",
    alt: "Life & Work OS Notion home page in the sample edition: links to Habits, Journal, Meals, Money and Work, and a Today list with two tasks",
  },
  sections: [
    {
      h: "What is inside",
      items: [
        "Home: Today (tasks due today or earlier that are still open), a month calendar of every dated task, and your goals as cards.",
        "Goals: link tasks to a goal; its progress is the share of those tasks you have ticked. Target date and status on each card.",
        "Habits: one row a day, five habits to tick, a score for the day. Rename the habits to your own.",
        "Journal: date, mood, win of the day, grateful for.",
        "Meals: a board by breakfast, lunch, dinner and snack, and a week calendar.",
        "Money: income, expenses and savings grouped by type, each line with a category and its month.",
        "Work: projects with status, deadline and next step.",
        "Start here: a page inside the template with five steps to make it yours.",
      ],
    },
    {
      h: "What you get",
      items: [
        "Life-Work-OS-Links.pdf: one page with the two links and how to copy them.",
        "Sample edition: every page filled with examples.",
        "Blank edition: the same pages, empty.",
      ],
    },
    {
      h: "How it works",
      text: "Open a link from the PDF in a browser on a computer (Chrome or Edge recommended), sign in to Notion, press Duplicate and pick your workspace. The copy is yours to edit.",
    },
    {
      h: "Good to know",
      items: [
        "Digital download. Nothing is shipped.",
        "Notion is a separate service and needs an internet connection.",
        "For personal use. Please do not share or resell the links.",
      ],
    },
  ],
  faq,
  buy: {
    label: "Buy on Gumroad ($9)",
    href: "https://yvoo.gumroad.com/l/notion-life-planner?utm_source=yvoolab&utm_medium=product-page&utm_campaign=c9",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Notion Life Planner Template",
      description: intro + " " + more,
      image: "https://yvoolab.github.io/products/notion-life-planner-hero.png",
      url: URL,
      brand: { "@type": "Brand", name: "Yvoo" },
      offers: {
        "@type": "Offer",
        price: "9",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://yvoo.gumroad.com/l/notion-life-planner",
      },
    },
    faqLd(faq),
  ],
};

export default function Page() {
  return <ProductPage p={p} />;
}
