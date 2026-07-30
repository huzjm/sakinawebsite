import { siteData } from "@/data/site";

export default function BankDetails() {
  return (
    <div className="card p-8">
      <p className="eyebrow">Payment Details</p>
      <h3 className="text-2xl mt-3">Bank Transfer</h3>

      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between border-b border-[var(--line)] pb-3">
          <dt className="text-[var(--ink-soft)]">Bank</dt>
          <dd className="font-medium">{siteData.payment.bank}</dd>
        </div>
        <div className="flex justify-between border-b border-[var(--line)] pb-3">
          <dt className="text-[var(--ink-soft)]">Account Title</dt>
          <dd className="font-medium">{siteData.payment.accountTitle}</dd>
        </div>
        <div className="flex justify-between items-center border-b border-[var(--line)] pb-3 gap-3">
          <dt className="text-[var(--ink-soft)] shrink-0">Account Number</dt>
          <dd className="font-medium tracking-wide text-right break-all">{siteData.payment.accountNumber}</dd>
        </div>
      </dl>

      <p className="mt-6 text-sm text-[var(--ink-soft)] leading-relaxed">
        After transferring, fill out the order form with your details and payment reference so your book can be sent your way.
      </p>

      <a
        href={siteData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full mt-6"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.19 3.03 14.7 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11a16.3 16.3 0 0 1-1.63-.6c-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.57 1.95 1.08.96 1.99 1.26 2.27 1.4.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
        </svg>
        Message on WhatsApp
      </a>
    </div>
  );
}
