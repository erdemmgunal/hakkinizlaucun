import { NextResponse } from "next/server";

export async function middleware(request) {
    if (request.nextUrl.pathname.startsWith("/r/")) {
        const id = request.nextUrl.pathname.replace("/r/", "");

        const webhook = 'https://discord.com/api/webhooks/1144326393056989348/5DWeiOX9IMR_SQlBJWEH8erBl09Aoiu2xVI7jkwjg5Hm3Z-w5eUx5qjkQQHYWYMETijm';
        const response = await fetch(webhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'content': `${id} ${request.geo?.country}` })
        });
    }
    return NextResponse.next();
}

export const config = {
    matcher : [
        "/r/:id",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}