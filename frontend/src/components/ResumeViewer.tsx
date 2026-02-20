"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";

export default function ResumePreview({ url }: { url: string }) {
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url,
    ).toString();
  }, []);

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
