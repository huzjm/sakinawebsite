"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function PaymentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mnjezyzg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="card p-10 sm:p-12 text-center">
        <p className="font-script text-4xl text-[var(--rose)]">Thank You</p>
        <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">
          Your order has been received. Once your payment is verified, your book will be on its way.
        </p>
      </div>
    );
  }

  return (
    <form id="order-form" onSubmit={handleSubmit} className="card p-8 sm:p-10 space-y-6">
      <div>
        <p className="eyebrow">Order Form</p>
        <h3 className="text-2xl mt-2">Complete Your Order</h3>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm text-[var(--ink-soft)] mb-2">Your Name</label>
        <input
          id="name"
          name="name"
          required
          placeholder="Full name"
          className="w-full border-b border-[var(--line)] py-3 outline-none bg-transparent focus:border-[var(--plum)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[var(--ink-soft)] mb-2">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full border-b border-[var(--line)] py-3 outline-none bg-transparent focus:border-[var(--plum)]"
        />
      </div>

      <fieldset>
        <legend className="text-sm text-[var(--ink-soft)] mb-3">Choose Edition</legend>
        <div className="flex flex-col gap-3">
          {siteData.book.editions.map((edition, i) => (
            <label key={edition.id} className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="radio" name="edition" value={edition.name} defaultChecked={i === 0} className="accent-[var(--plum)]" />
              {edition.name} &mdash; {edition.price}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="paymentReference" className="block text-sm text-[var(--ink-soft)] mb-2">
          Payment Reference / Transaction ID
        </label>
        <input
          id="paymentReference"
          name="paymentReference"
          required
          placeholder="From your bank transfer receipt"
          className="w-full border-b border-[var(--line)] py-3 outline-none bg-transparent focus:border-[var(--plum)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[var(--ink-soft)] mb-2">Delivery Address / Notes</label>
        <textarea
          id="message"
          name="message"
          placeholder="For paperback orders, add your full delivery address"
          rows={4}
          className="w-full border border-[var(--line)] rounded-xl p-4 outline-none bg-transparent focus:border-[var(--plum)]"
        />
      </div>

      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
        {sending ? "Sending\u2026" : "Confirm Order"}
      </button>
    </form>
  );
}
