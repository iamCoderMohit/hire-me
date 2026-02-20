"use client";

import { useEffect, useState } from "react";

export default function ResumePreview({ url }: { url: string }) {
  const [scale, setScale] = useState(0.5);
  const [PdfComponents, setPdfComponents] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await import("react-pdf");
      pdf.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      setPdfComponents({
        Document: pdf.Document,
        Page: pdf.Page,
      });
    };

    loadPdf();
  }, []);

    if (!PdfComponents) return <div>Loading PDF...</div>;

  const { Document, Page } = PdfComponents;

  return (
    <div
      className={`w-[250px] h-[350px] overflow-hidden border rounded-t-md cursor-pointer shadow bg-white flex justify-center items-start hover:bg-gray-700/10 z-0`}
    >
      <Document file={url}>
        <Page pageNumber={1} scale={scale} />
      </Document>
    </div>
  );
}
