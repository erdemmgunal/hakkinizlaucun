import { NextResponse } from "next/server";

export async function middleware(request) {
    const response = await fetch(process.env.DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'content': `${request.nextUrl.pathname} ${request.geo?.country}` })
    });
    return NextResponse.next();
}

export const config = {
    matcher : [
        "/r/:id",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}