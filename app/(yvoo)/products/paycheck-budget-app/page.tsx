import type { Metadata } from "next";
import ProductPage, { faqLd, type Faq, type Product } from "../product-page";

const URL = "https://yvoolab.github.io/products/paycheck-budget-app/";
const intro = "Paycheck Budget is a budget app for anyone who plans money one paycheck at a time.";

export const metadata: Metadata = {
  title: "Paycheck Budget App: Plan Bills by Paycheck in Your Browser — Yvoo Lab",
  description: intro,
  alternates: { canonical: URL },
};

const faq: Faq[] = [
  { q: "Do I need Excel or Google Sheets?", a: "No. It is not a spreadsheet. No formulas to break, no Google account." },
  { q: "Do I have to log every purchase?", a: "No. Plan mode works from your pay and bills alone. Tracking is there when you want it." },
  { q: "Does it connect to my bank?", a: "No. You type your pay and bills, and your balance if you track. Nothing leaves your computer." },
];

const p: Product = {
  h1: "Paycheck Budget App: Plan Bills by Paycheck in Your Browser, Offline, No Spreadsheet, No Subscription",
  intro,
  more: "Setup in three short screens, no spreadsheet formulas to break, no Google or Excel account. It opens in your browser and works offline; Chrome or Edge recommended.",
  img: {
    src: "/products/paycheck-budget-app-hero.png",
    alt: "Paycheck budget app open in a desktop browser: safe to spend today, how it is counted, and bills due before payday, example numbers",
  },
  sections: [
    {
      h: "What it does",
      items: [
        "Setup in three short screens: your pay and next payday, the bills that repeat, then plan or track. Each screen says what to enter.",
        "Plan mode: paychecks and bills only. No logging of every coffee.",
        "Plan and track: tap + Spend, type the amount, tap a category. Today shows one number, safe to spend today, counted line by line.",
        "Paychecks: the next six, each with its bills, debt minimums and savings.",
        "Calendar: paydays, bills and spending by day, and the month at a glance.",
        "Debt: a payoff date by avalanche or snowball, and the total interest under each.",
        "Savings goals, other income, and six spending categories you can rename.",
        "Undo after every entry, edit and delete. Light, white or dark theme.",
        "A weekly check of bills and backup, plus spending and balance if you track. No streaks to keep.",
      ],
    },
    {
      h: "What you get",
      items: [
        "Paycheck-Budget-Yvoo.html: the app, one file",
        "Paycheck-Budget-Quick-Start.pdf: a two-page guide to the screens",
      ],
    },
    {
      h: "Your data",
      text: "Your numbers are stored in your browser on that computer, nowhere else. Clearing browsing data erases them. The app has a Download a backup button and reminds you once a week. A backup file restores everything, in the same browser or another one.",
    },
    {
      h: "Good to know",
      items: [
        "Digital download. Nothing is shipped.",
        "Any of these currencies: USD, EUR, GBP, CAD, AUD, NZD, CHF.",
        "A planning tool, not financial advice.",
        "For personal use. Please do not share or resell the file.",
        "Built with the help of AI tools, then tested and reviewed before release.",
      ],
    },
  ],
  faq,
  buy: {
    label: "Buy on Gumroad ($9)",
    href: "https://yvoo.gumroad.com/l/paycheck-budget?utm_source=yvoolab&utm_medium=product-page&utm_campaign=c8",
  },
  demo: { label: "Try the free demo", href: "https://yvoolab.github.io/paycheck-budget-demo/" },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Paycheck Budget",
      description: intro,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any (browser)",
      url: URL,
      image: "https://yvoolab.github.io/products/paycheck-budget-app-hero.png",
      offers: {
        "@type": "Offer",
        price: "9",
        priceCurrency: "USD",
        url: "https://yvoo.gumroad.com/l/paycheck-budget",
      },
    },
    faqLd(faq),
  ],
};

export default function Page() {
  return <ProductPage p={p} />;
}
