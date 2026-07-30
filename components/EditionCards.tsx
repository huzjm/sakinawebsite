import Link from "next/link";
import { siteData } from "@/data/site";

export default function EditionCards({ variant = "full" }: { variant?: "compact" | "full" }) {
  return (
    <section className={variant === "compact" ? "px-6 py-20 md:py-28" : "px-6"}>
      <div className="max-w-4xl mx-auto">
        {variant === "compact" && (
          <div className="text-center mb-12">
            <p className="eyebrow">Bring It Home</p>
            <h2 className="text-3xl md:text-4xl mt-3">Choose Your Edition</h2>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {siteData.book.editions.map((edition) => (
            <div key={edition.id} className="card p-8 flex flex-col">
              <p className="eyebrow">{edition.name}</p>
              <p className="text-3xl mt-3 text-[var(--plum-deep)] font-[var(--font-playfair)]">
                {edition.price}
              </p>
              <p className="mt-4 text-sm text-[var(--ink-soft)] leading-relaxed flex-1">
                {edition.description}
              </p>
              {variant === "compact" ? (
                <Link href="/buy" className="btn-secondary mt-6 self-start">
                  Order the {edition.name}
                </Link>
              ) : (
                <a href="#order-form" className="btn-secondary mt-6 self-start">
                  Order the {edition.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
