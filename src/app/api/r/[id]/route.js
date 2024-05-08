import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    console.log(id);
    return NextResponse.json({ id})
    // return NextResponse.redirect(`https://www.hakkiscanner.com/flights/${id}`);
}


// localhost:3000/api/r/422caa377e334df5bd225b647ed65e52
// https://web.flypgs.com/booking?language=tr&adultCount=1&arrivalPort=OTP&departurePort=SAW&currency=TRY&dateOption=1&departureDate=2024-11-28&returnDate=2024-12-02