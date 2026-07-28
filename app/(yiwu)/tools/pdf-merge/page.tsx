'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Link from 'next/link';

export default function PdfMergePage() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    const valid = Array.from(list).filter((f) => /\.pdf$/i.test(f.name));
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

  const merge = async () => {
    if (files.length < 2) {
      setError('请至少上传 2 个 PDF 文件');
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const src = await PDFDocument.load(bytes);
        const pages = await merged.copyPages(src, src.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
      }
      const out = await merged.save();
      const blob = new Blob([new Uint8Array(out)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `merged-${Date.now()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : '合并失败，请检查文件是否损坏');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <Link href="/tools" className="text-sm text-slate-500 hover:text-slate-900">
        ← 返回首页
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">PDF 合并</h1>
      <p className="mt-2 text-slate-600">
        按拖入顺序合并多个 PDF。最多 50 个文件，文件全程在你的浏览器里处理。
      </p>

      <div
        className="mt-8 rounded-lg border-2 border-dashed border-slate-300 bg-white p-10 text-center transition hover:border-slate-400"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
          id="pdf-input"
        />
        <label htmlFor="pdf-input" className="cursor-pointer font-medium text-slate-700">
          点击选择 PDF 文件，或拖到此区域
        </label>
      </div>

      {files.length > 0 && (
        <ul className="mt-6 space-y-2">
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-2 text-sm"
            >
              <span className="flex-1 truncate">
                {i + 1}. {f.name}
              </span>
              <span className="ml-3 text-xs text-slate-500">
                {(f.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <div className="ml-4 flex gap-1">
                <button
                  onClick={() => moveFile(i, i - 1)}
                  disabled={i === 0}
                  className="rounded px-2 py-1 text-xs hover:bg-slate-100 disabled:opacity-30"
                  aria-label="上移"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveFile(i, i + 1)}
                  disabled={i === files.length - 1}
                  className="rounded px-2 py-1 text-xs hover:bg-slate-100 disabled:opacity-30"
                  aria-label="下移"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeFile(i)}
                  className="rounded px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                >
                  删除
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <div className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        onClick={merge}
        disabled={busy || files.length < 2}
        className="mt-6 rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {busy ? '合并中…' : `合并并下载（${files.length} 个文件）`}
      </button>
    </div>
  );
}
