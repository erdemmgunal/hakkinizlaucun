import { NextResponse } from "next/server";

export async function middleware(request) {
    const embedData = {
        embeds: [
            {
                title: 'Log Information',
                color: 0x0099ff,
                fields: [
                    { name: 'Path', value: `${request.nextUrl.pathname}` },
                    { name: 'User-Agent', value: `${request.headers.get('user-agent')}` },
                    { name: 'Referer', value: `${request.headers.get('referer')}` },
                    { name: 'City', value: `${request.geo?.city}` },
                    { name: 'Country', value: `${request.geo?.country}` },
                    { name: 'Timestamp', value: new Date().toLocaleString() }
                ]
            }
        ]
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(embedData)
    });
    return NextResponse.next();
}

export const config = {
    matcher : [
        "/r/:id",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}