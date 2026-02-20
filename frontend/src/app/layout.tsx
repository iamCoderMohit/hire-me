import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"

export const metadata: Metadata = {
  title: "Hire-me",
  description: "Search Jobs with AI",
};

const inter = Inter({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={inter.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
