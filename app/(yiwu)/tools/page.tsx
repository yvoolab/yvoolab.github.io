import Link from "next/link";

const tools = [
  {
    href: "/tools/pdf-merge",
    title: "PDF 合并",
    desc: "把多个 PDF 按顺序合成一个。最多 50 个文件。",
  },
  {
    href: "/tools/excel-merge",
    title: "Excel / CSV 合并",
    desc: "把多个表格文件合到一个 sheet 里。自动对齐列名。",
  },
];

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="hl-display text-3xl">免费在线小工具</h1>
        <p className="mt-3" style={{ color: "var(--hl-fg-muted)" }}>
          每个工具只做一件事，做到底。文件不离开你的浏览器，不上传任何服务器。
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="hl-panel block rounded-lg p-6 transition hover:shadow-sm"
          >
            <h2 className="hl-display text-lg">{t.title}</h2>
            <p className="mt-2 text-sm" style={{ color: "var(--hl-fg-muted)" }}>
              {t.desc}
            </p>
          </Link>
        ))}
      </section>

      <section className="hl-panel mt-16 rounded-lg p-6 text-sm">
        <p className="hl-display" style={{ color: "var(--hl-accent)" }}>
          需要更复杂的处理？
        </p>
        <p className="mt-2">
          扫描件 OCR、复杂表格汇总、报表生成等需求 —— 发邮件到{" "}
          <a href="mailto:yvoolab@gmail.com" className="font-semibold underline">
            yvoolab@gmail.com
          </a>{" "}
          报需求。
        </p>
      </section>
    </div>
  );
}
