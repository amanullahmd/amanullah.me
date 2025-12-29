'use client'

import { useState } from 'react'

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [scale, setScale] = useState(100)

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
      {/* Controls */}
      <div className="bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {title}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(Math.max(50, scale - 10))}
            className="px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            −
          </button>

          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 px-3 min-w-[60px] text-center">
            {scale}%
          </span>

          <button
            onClick={() => setScale(Math.min(200, scale + 10))}
            className="px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            +
          </button>

          <a
            href={pdfUrl}
            download
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ml-2"
          >
            Download
          </a>
        </div>
      </div>

      {/* PDF Viewer using iframe */}
      <div className="overflow-auto max-h-[800px] bg-slate-100 dark:bg-slate-800">
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=${scale}`}
          className="w-full h-[800px] border-none"
          title={title}
        />
      </div>
    </div>
  )
}
