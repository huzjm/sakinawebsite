"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBuyButton() {
  const pathname = usePathname();
  if (pathname === "/buy") return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-40 md:hidden">
      <Link href="/buy" className="btn-primary w-full !py-3.5">
        Shop the Book &mdash; PKR 500
      </Link>
    </div>
  );
}
