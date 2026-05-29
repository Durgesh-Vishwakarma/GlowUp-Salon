import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
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

function toApiPayload(data: Partial<BookingPayload>) {
  return {
    name: data.name!.trim(),
    phone: data.phone!.trim(),
    service: data.service!.trim(),
    preferredDate: data.preferredDate!.trim(),
    preferredTime: data.preferredTime!.trim(),
    message: data.message?.trim() || "",
    status: "new"
  };
}

function toSupabasePayload(data: ReturnType<typeof toApiPayload>) {
  return {
    name: data.name,
    phone: data.phone,
    service: data.service,
    preferred_date: data.preferredDate,
    preferred_time: data.preferredTime,
    message: data.message,
    status: data.status
  };
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Bookings API is ready."
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

    const booking = toApiPayload(data);

    if (!isSupabaseConfigured || !supabase) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking service is not configured."
        },
        { status: 503 }
      );
    }

    const { data: savedBooking, error } = await supabase
      .from("bookings")
      .insert([toSupabasePayload(booking)])
      .select()
      .single();

    if (error) {
      console.error("Supabase booking insert failed:", error.message);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save booking. Please try again."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking request saved.",
      data: savedBooking
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}
