import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;

    const webhook = 'https://discord.com/api/webhooks/1144326393056989348/5DWeiOX9IMR_SQlBJWEH8erBl09Aoiu2xVI7jkwjg5Hm3Z-w5eUx5qjkQQHYWYMETijm';
    const response = await fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'content': `${id} ${request.geo?.country}` })
    });

    return NextResponse.json({ id})
}

// localhost:3000/api/r/422caa377e334df5bd225b647ed65e52
// https://web.flypgs.com/booking?language=tr&adultCount=1&arrivalPort=OTP&departurePort=SAW&currency=TRY&dateOption=1&departureDate=2024-11-28&returnDate=2024-12-02