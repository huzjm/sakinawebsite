"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import RoseMark from "@/components/RoseMark";
import { siteData } from "@/data/site";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "The Book", href: "/buy" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[var(--paper)]/95 backdrop-blur-md shadow-[0_1px_0_var(--line)]"
          : "bg-[var(--paper)]/90 md:bg-transparent"
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${scrolled ? "py-3.5" : "py-6"}`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[var(--plum-deep)]">
            <RoseMark className="w-5 h-5 shrink-0" />
            <span
              className={`font-[var(--font-playfair)] transition-all duration-500 ${
                scrolled ? "text-xl" : "text-2xl md:text-3xl"
              }`}
            >
              {siteData.author.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative uppercase tracking-[0.2em] text-xs pb-1.5 ${
                    active ? "text-[var(--plum-deep)]" : "text-[var(--ink-soft)] hover:text-[var(--plum-deep)]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-px bg-[var(--gold)] transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
            <Link href="/buy" className="btn-primary !py-2.5 !px-6 !text-xs">
              Shop the Book
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden text-2xl text-[var(--plum-deep)] leading-none w-9 h-9 flex items-center justify-center"
          >
            {open ? "\u00d7" : "\u2630"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-6 border-t border-[var(--line)] pt-6 flex flex-col items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`uppercase tracking-[0.2em] text-sm ${
                  pathname === link.href ? "text-[var(--plum-deep)]" : "text-[var(--ink-soft)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/buy" className="btn-primary mt-2">
              Shop the Book
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
