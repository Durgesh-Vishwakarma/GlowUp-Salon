import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <Link
      href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,211,102,0.42)] sm:bottom-6 sm:right-8 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}