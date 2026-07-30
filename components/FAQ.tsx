"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow">Good to Know</p>
          <h2 className="text-3xl md:text-4xl mt-3">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {siteData.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="text-lg text-[var(--plum-deep)] font-[var(--font-playfair)]">{item.q}</span>
                  <span className={`text-xl text-[var(--gold)] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[var(--ink-soft)] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
