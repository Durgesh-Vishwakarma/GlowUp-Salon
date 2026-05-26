import { NextResponse } from "next/server";
import type { BookingPayload } from "@/types/booking";

const requiredFields: Array<keyof BookingPayload> = [
  "name",
  "phone",
  "service",
  "preferredDate",
  "preferredTime"
];

function isValidBookingPayload(data: Partial<BookingPayload>) {
  return requiredFields.every((field) => {
    const value = data[field];

    return typeof value === "string" && value.trim().length > 0;
  });
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<BookingPayload>;

    if (!isValidBookingPayload(data)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields."
        },
        { status: 400 }
      );
    }

    const booking: BookingPayload = {
      name: data.name!.trim(),
      phone: data.phone!.trim(),
      service: data.service!.trim(),
      preferredDate: data.preferredDate!.trim(),
      preferredTime: data.preferredTime!.trim(),
      message: data.message?.trim() || ""
    };

    // Supabase-ready for later:
    // const { error } = await supabase.from("bookings").insert([booking]);
    // if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Booking request received.",
      data: booking
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}