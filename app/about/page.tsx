import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export const metadata = {
  title: `About | ${siteData.author.name}`,
};

export default function AboutPage() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow">About the Author</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mt-4">{siteData.author.name}</h1>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-16 items-start">
          <div className="mx-auto md:mx-0 sticky top-32">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-4 rounded-3xl bg-[var(--rose-soft)]/40 rotate-2" />
              <div className="relative w-56 sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--line)] shadow-[0_30px_60px_-24px_rgba(26,20,14,0.4)] -rotate-1">
                {siteData.author.image ? (
                  <Image
                    src={siteData.author.image}
                    alt={siteData.author.name}
                    fill
                    sizes="256px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--paper-deep)] flex items-center justify-center text-5xl font-[var(--font-playfair)] text-[var(--plum-deep)]">
                    {siteData.author.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-lg leading-[2rem] text-[var(--ink)]/90 space-y-6">
            {siteData.author.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            <p className="font-script text-3xl text-[var(--plum)] pt-4">&mdash; {siteData.author.name}</p>

            <div className="pt-8 border-t border-[var(--line)] mt-8">
              <p className="text-base text-[var(--ink-soft)]">
                Currently writing under the name <span className="text-[var(--plum-deep)]">Sakina Shoaib</span>, with her
                debut novel <em>&ldquo;{siteData.book.title}&rdquo;</em> now available.
              </p>
              <Link href="/buy" className="btn-primary inline-flex mt-6">
                Shop the Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
