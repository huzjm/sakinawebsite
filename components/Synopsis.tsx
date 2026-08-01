import Link from "next/link";
import { siteData } from "@/data/site";

export default function Synopsis({ variant = "full" }: { variant?: "teaser" | "full" }) {
  const paragraphs =
    variant === "teaser" ? siteData.book.synopsis.slice(0, 2) : siteData.book.synopsis;

  return (
    <section className="px-3 py-10 sm:px-6 sm:py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <p className="eyebrow">The Synopsis</p>
          <h2 className="text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-3">{siteData.book.title}</h2>
        </div>

        <div className="diary-page relative overflow-hidden">
          <div className="ribbon" aria-hidden="true" />
          <div className="diary-lines px-3 py-6 sm:px-8 sm:py-10 md:px-16 md:pt-12 md:pb-10">
            <p className="font-script text-[1.45rem] sm:text-3xl md:text-4xl text-[var(--plum)] pl-1 sm:pl-2 leading-[1.95rem] md:translate-y-[-1.0rem] sm:leading-[2.15rem] mb-0">
              Dear Diary,
            </p>

            <div className="mt-2 sm:mt-6 pl-1 sm:pl-2">
              {paragraphs.map((p, i) => (
                <p key={i} className="my-0 text-[var(--ink)]/90 leading-[1.9rem] sm:leading-[2.15rem] text-[0.88rem] sm:text-[1.02rem]">
                  {p}
                </p>
              ))}
            </div>

            {variant === "teaser" && (
              <p className="mt-2 pl-1 sm:pl-2 text-[var(--ink-soft)] italic text-sm sm:text-base">&hellip;</p>
            )}

            {variant === "teaser" && (
              <p className="font-script text-[1.05rem] sm:text-2xl text-[var(--plum)] text-right mt-4 sm:mt-8 pr-2 sm:pr-4">
                &mdash; read more inside
              </p>
            )}
          </div>
        </div>

        {variant === "teaser" && (
          <div className="text-center mt-7 sm:mt-10">
            <Link href="/buy" className="btn-secondary">
              Read the Full Synopsis
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
