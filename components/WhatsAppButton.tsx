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
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-[#25D366] text-white shadow-glow transition hover:-translate-y-1 hover:shadow-2xl sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
