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
        <h1 className="text-3xl font-bold tracking-tight">免费在线小工具</h1>
        <p className="mt-3 text-slate-600">
          每个工具只做一件事，做到底。文件不离开你的浏览器，不上传任何服务器。
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="block rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-400 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold">{t.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16 rounded-lg bg-amber-50 p-6 text-sm text-amber-900">
        <p className="font-medium">需要更复杂的处理？</p>
        <p className="mt-2">
          扫描件 OCR、复杂表格汇总、报表生成等需求 —— 到小红书私信 <span className="font-semibold">@AI一武</span> 报需求。
        </p>
      </section>
    </div>
  );
}
