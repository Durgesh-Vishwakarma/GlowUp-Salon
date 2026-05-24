import { NextResponse } from "next/server";
import type { BookingPayload } from "@/types/booking";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as BookingPayload;

    const requiredFields: Array<keyof BookingPayload> = [
      "name",
      "phone",
      "service",
      "preferredDate",
      "preferredTime"
    ];

    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, message: "Please fill all required fields.", missingFields },
        { status: 400 }
      );
    }

    // Supabase-ready:
    // const { error } = await supabase.from("bookings").insert([data]);
    // if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Booking request received.",
      data
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
