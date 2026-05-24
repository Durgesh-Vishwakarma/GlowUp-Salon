import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppUrl(message: string, phone = "919876543210") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
