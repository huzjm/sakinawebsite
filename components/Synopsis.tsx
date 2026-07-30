import Link from "next/link";
import { siteData } from "@/data/site";

export default function Synopsis({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const paragraphs =
    variant === "teaser" ? siteData.book.synopsis.slice(0, 2) : siteData.book.synopsis;

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="eyebrow">The Synopsis</p>
          <h2 className="text-3xl md:text-4xl mt-3">{siteData.book.title}</h2>
        </div>

        <div className="diary-page relative overflow-hidden">
          <div className="ribbon" aria-hidden="true" />
          <div className="diary-lines px-8 sm:px-12 md:px-16 pt-12 pb-10">
            <p className="font-script text-3xl sm:text-4xl text-[var(--plum)] pl-2">
              Dear Diary,
            </p>

            <div className="mt-6 space-y-5 pl-2">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[var(--ink)]/90 leading-[2.15rem] text-[1.02rem]">
                  {p}
                </p>
              ))}
            </div>

            {variant === "teaser" && (
              <p className="mt-4 pl-2 text-[var(--ink-soft)] italic">&hellip;</p>
            )}

            <p className="font-script text-2xl text-[var(--plum)] text-right mt-8 pr-4">
              &mdash; {variant === "teaser" ? "read more inside" : "the end, for now"}
            </p>
          </div>
        </div>

        {variant === "teaser" && (
          <div className="text-center mt-10">
            <Link href="/buy" className="btn-secondary">
              Read the Full Synopsis
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
