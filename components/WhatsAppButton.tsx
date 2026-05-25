import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <Link
      href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
      target="_blank"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-[#22c55e] text-white shadow-glow transition hover:-translate-y-1 hover:shadow-2xl sm:bottom-6 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
