import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function AuthorPreview() {
  return (
    <section className="px-6 py-20 md:py-28 bg-[var(--paper-deep)]/60">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-center">
        <div className="mx-auto md:mx-0">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[var(--paper)] shadow-[0_20px_40px_-16px_rgba(26,20,14,0.35)]">
            {siteData.author.image ? (
              <Image
                src={siteData.author.image}
                alt={siteData.author.name}
                fill
                sizes="208px"
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-[var(--rose-soft)]/50 flex items-center justify-center text-3xl font-[var(--font-playfair)] text-[var(--plum-deep)]">
                {siteData.author.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="eyebrow">About the Author</p>
          <h2 className="text-3xl md:text-4xl mt-3">{siteData.author.name}</h2>
          <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-lg mx-auto md:mx-0">
            {siteData.author.bio[0]}
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 text-sm uppercase tracking-[0.2em] text-[var(--plum)] border-b border-[var(--gold)] pb-1 hover:text-[var(--plum-deep)] hover:border-[var(--plum-deep)]"
          >
            Read Her Story
          </Link>
        </div>
      </div>
    </section>
  );
}
