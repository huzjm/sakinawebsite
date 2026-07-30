import Image from "next/image";
import Synopsis from "@/components/Synopsis";
import EditionCards from "@/components/EditionCards";
import PaymentForm from "@/components/PaymentForm";
import BankDetails from "@/components/BankDetails";
import FAQ from "@/components/FAQ";
import { siteData } from "@/data/site";

export const metadata = {
  title: `Shop | ${siteData.book.title}`,
};

export default function BuyPage() {
  return (
    <>
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-center">
          <div className="mx-auto md:mx-0">
            <div className="relative w-56 sm:w-64 aspect-[2/3] rounded-md overflow-hidden shadow-[0_30px_60px_-20px_rgba(26,20,14,0.45)] border border-[var(--line)] bg-[var(--paper-deep)]">
              {siteData.book.cover ? (
                <Image
                  src={siteData.book.cover}
                  alt={`${siteData.book.title} book cover`}
                  fill
                  sizes="256px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center p-6 text-sm text-[var(--ink-soft)] font-[var(--font-playfair)]">
                  {siteData.book.title}
                </div>
              )}
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="eyebrow">The Book</p>
            <h1 className="text-4xl sm:text-5xl mt-4 leading-[1.1]">{siteData.book.title}</h1>
            <p className="mt-5 text-[var(--ink-soft)] text-lg italic">{siteData.book.tagline}</p>
            <p className="mt-6 text-2xl text-[var(--plum-deep)] font-[var(--font-playfair)]">
              {siteData.book.editions[0].price}
            </p>
            <a href="#order-form" className="btn-primary inline-flex mt-6">
              Order Your Copy
            </a>
          </div>
        </div>
      </section>

      <Synopsis variant="full" />

      <EditionCards variant="full" />

      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow">Complete Your Purchase</p>
            <h2 className="text-3xl md:text-4xl mt-3">How to Order</h2>
            <p className="mt-4 text-[var(--ink-soft)] max-w-xl mx-auto leading-relaxed">
              Transfer payment to the account below, then fill out the order form with your details and
              transaction reference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <BankDetails />
            <PaymentForm />
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
