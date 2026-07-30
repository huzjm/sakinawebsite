import { siteData } from "@/data/site";

export const metadata = {
  title: `Contact | ${siteData.author.name}`,
};

const channels = [
  {
    label: "Email",
    value: siteData.contact.email,
    href: `mailto:${siteData.contact.email}`,
    note: "For general questions and collaborations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: siteData.contact.instagram,
    href: siteData.contact.instagramUrl,
    note: "Behind-the-scenes and updates.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  
];

export default function ContactPage() {
  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow">Get in Touch</p>
        <h1 className="text-4xl sm:text-5xl mt-4">Say Hello</h1>
        <p className="mt-5 text-[var(--ink-soft)] text-lg leading-relaxed max-w-xl mx-auto">
          Questions about the book, an order, or just want to share your thoughts after reading?
          I&rsquo;d love to hear from you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-14 grid gap-5">
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card flex items-center gap-5 p-6 group hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(26,20,14,0.4)]"
          >
            <span className="w-12 h-12 rounded-full bg-[var(--paper-deep)] flex items-center justify-center text-[var(--plum)] shrink-0 group-hover:bg-[var(--rose-soft)]/60">
              {channel.icon}
            </span>
            <span className="flex-1 text-left">
              <span className="block text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">{channel.label}</span>
              <span className="block text-lg text-[var(--plum-deep)] font-[var(--font-playfair)] mt-0.5">
                {channel.value}
              </span>
              <span className="block text-sm text-[var(--ink-soft)] mt-1">{channel.note}</span>
            </span>
            <span className="text-[var(--gold)] text-xl group-hover:translate-x-1 transition-transform" aria-hidden="true">
              &rarr;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
