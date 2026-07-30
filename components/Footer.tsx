import Link from "next/link";
import RoseMark from "@/components/RoseMark";
import { siteData } from "@/data/site";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "The Book", href: "/buy" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-28 md:mt-36 bg-[var(--plum-deep)] text-[var(--paper)]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
        <RoseMark className="w-7 h-7 mx-auto text-[var(--rose-soft)]" />

        <h2 className="text-3xl md:text-4xl mt-5 text-[var(--paper)]">{siteData.author.name}</h2>
        <p className="mt-3 text-[var(--paper)]/70 text-sm tracking-wide">Author &amp; Storyteller</p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-[var(--paper)]/80 hover:text-white text-sm uppercase tracking-[0.15em]">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-[var(--paper)]/60">
          <a href={`mailto:${siteData.contact.email}`} className="hover:text-white">
            {siteData.contact.email}
          </a>
          <span className="hidden sm:inline">&middot;</span>
          <a href={siteData.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {siteData.contact.instagram}
          </a>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-xs text-[var(--paper)]/45 tracking-wide">
          &copy; {new Date().getFullYear()} {siteData.author.name} &middot; {siteData.site.domain}
        </div>
      </div>
    </footer>
  );
}
