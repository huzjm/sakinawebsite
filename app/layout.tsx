import type { Metadata } from "next";
import { Playfair_Display, Lora, Caveat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBuyButton from "@/components/MobileBuyButton";
import PageTransition from "@/components/PageTransition";
import { siteData } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteData.author.name} | ${siteData.book.title}`,
  description: `Official website of ${siteData.author.name}. Read the story behind "${siteData.book.title}" and order your copy.`,
  keywords: ["Sakina Shoaib", "author", "book", "Pakistani author", "novel", "ebook", "Dear Diary I've Fallen in Love"],
  authors: [{ name: siteData.author.name }],
  openGraph: {
    title: `${siteData.author.name} | ${siteData.book.title}`,
    description: `Discover "${siteData.book.title}" by ${siteData.author.name}.`,
    type: "website",
    locale: "en_PK",
    images: [{ url: siteData.book.cover, width: 800, height: 1200, alt: `${siteData.book.title} cover` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.author.name} | ${siteData.book.title}`,
    description: `Discover "${siteData.book.title}" by ${siteData.author.name}.`,
    images: [siteData.book.cover],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} ${caveat.variable} antialiased`}>
        <Navbar />
        <PageTransition>
          <main className="pt-28 md:pt-36">{children}</main>
        </PageTransition>
        <Footer />
        <MobileBuyButton />
      </body>
    </html>
  );
}
