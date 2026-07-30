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
  {
    label: "WhatsApp",
    value: siteData.contact.whatsappNumber,
    href: siteData.contact.whatsappUrl,
    note: "Fastest way to reach me about an order.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.19 3.03 14.7 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11a16.3 16.3 0 0 1-1.63-.6c-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
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
