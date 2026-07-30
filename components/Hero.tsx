import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function Hero() {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-10 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="eyebrow">{siteData.home.greeting}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.08]">
            {siteData.home.welcome}
          </h1>
          <p className="mt-6 text-[var(--ink-soft)] text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            {siteData.home.intro}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/buy" className="btn-primary">
              {siteData.home.cta} &mdash; Shop Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Meet the Author
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-[var(--rose-soft)]/40 -rotate-3"
            />
            <div className="relative w-56 sm:w-64 md:w-72 aspect-[2/3] rotate-2 rounded-md overflow-hidden shadow-[0_30px_60px_-20px_rgba(26,20,14,0.45)] border border-[var(--line)] bg-[var(--paper-deep)]">
              {siteData.book.cover ? (
                <Image
                  src={siteData.book.cover}
                  alt={`${siteData.book.title} book cover`}
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center p-6 text-sm text-[var(--ink-soft)] font-[var(--font-playfair)]">
                  {siteData.book.title}
                </div>
              )}
            </div>
            <div className="absolute -top-2 right-6 w-6 h-16 bg-gradient-to-b from-[var(--rose)] to-[var(--plum)] rotate-2" style={{ clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
