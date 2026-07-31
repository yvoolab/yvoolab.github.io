'use client';

import { useState } from 'react';
import ExcelJS from 'exceljs';
import Link from 'next/link';

type Row = unknown[];

export default function ExcelMergePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skipHeader, setSkipHeader] = useState(true);

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    const valid = Array.from(list).filter((f) => /\.(xlsx|xls|csv)$/i.test(f.name));
    setFiles((prev) => [...prev, ...valid].slice(0, 50));
    setError(null);
  };

  const removeFile = (i: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  };

  const moveFile = (from: number, to: number) => {
    if (to < 0 || to >= files.length) return;
    setFiles((prev) => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  };

  const readRows = async (file: File): Promise<Row[]> => {
    const buf = await file.arrayBuffer();
    if (/\.csv$/i.test(file.name)) {
      const text = new TextDecoder('utf-8').decode(buf);
      return text
        .split(/\r?\n/)
        .filter((line) => line.length > 0)
        .map((line) => line.split(','));
    }
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.load(buf);
    const ws = wb.worksheets[0];
    if (!ws) return [];
    const out: Row[] = [];
    ws.eachRow({ includeEmpty: false }, (row) => {
      const arr: unknown[] = [];
      row.eachCell({ includeEmpty: true }, (cell) => {
        arr.push(cell.value);
      });
      out.push(arr);
    });
    return out;
  };

  const merge = async () => {
    if (files.length < 2) {
      setError('请至少上传 2 个表格文件');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const out = new ExcelJS.Workbook();
      const sheet = out.addWorksheet('合并结果');
      let isFirst = true;
      for (const file of files) {
        const rows = await readRows(file);
        const start = isFirst || !skipHeader ? 0 : 1;
        for (let i = start; i < rows.length; i++) {
          sheet.addRow(rows[i] as ExcelJS.CellValue[]);
        }
        isFirst = false;
      }
      const buf = await out.xlsx.writeBuffer();
      const blob = new Blob([new Uint8Array(buf as ArrayBuffer)], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `merged-${Date.now()}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : '合并失败，请检查文件格式');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <Link href="/tools" className="text-sm hover:underline" style={{ color: "var(--hl-fg-muted)" }}>
        ← 返回首页
      </Link>
      <h1 className="hl-display mt-4 text-3xl">Excel / CSV 合并</h1>
      <p className="mt-2" style={{ color: "var(--hl-fg-muted)" }}>
        把多个 .xlsx / .csv 文件合并到一个 sheet。结构相同的多个月数据合并的常用场景。
      </p>

      <div
        className="hl-hairline mt-8 rounded-lg border-2 border-dashed p-10 text-center transition"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          id="xls-input"
        />
        <label htmlFor="xls-input" className="cursor-pointer font-medium">
          点击选择 .xlsx / .csv，或拖到此区域
        </label>
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={skipHeader}
          onChange={(e) => setSkipHeader(e.target.checked)}
        />
        第 2 个文件起跳过首行（适合所有文件结构相同、第一行都是表头的场景）
      </label>

      {files.length > 0 && (
        <ul className="mt-6 space-y-2">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="hl-panel flex items-center justify-between rounded-md px-4 py-2 text-sm"
            >
              <span className="flex-1 truncate">
                {i + 1}. {f.name}
              </span>
              <span className="ml-3 text-xs" style={{ color: "var(--hl-fg-muted)" }}>
                {(f.size / 1024).toFixed(0)} KB
              </span>
              <div className="ml-4 flex gap-1">
                <button
                  onClick={() => moveFile(i, i - 1)}
                  disabled={i === 0}
                  className="rounded px-2 py-1 text-xs hover:bg-black/5 disabled:opacity-30"
                  aria-label="上移"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveFile(i, i + 1)}
                  disabled={i === files.length - 1}
                  className="rounded px-2 py-1 text-xs hover:bg-black/5 disabled:opacity-30"
                  aria-label="下移"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeFile(i)}
                  className="rounded px-2 py-1 text-xs hover:bg-black/5"
                  style={{ color: "var(--hl-accent)" }}
                >
                  删除
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <div
          className="mt-4 rounded-md px-4 py-3 text-sm"
          style={{ border: "1px solid var(--hl-accent)", color: "var(--hl-accent)" }}
        >
          {error}
        </div>
      )}

      <button
        onClick={merge}
        disabled={busy || files.length < 2}
        className="hl-cta mt-6 rounded-md px-6 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40"
      >
        {busy ? '合并中…' : `合并并下载（${files.length} 个文件）`}
      </button>
    </div>
  );
}
