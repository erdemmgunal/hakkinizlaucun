import { NextResponse } from "next/server";

export async function middleware(request) {
    console.log(request.nextUrl.pathname);
    if (req.nextUrl.pathname === "/r/:id") {
        console.log("TRACK!");
    }
}

export const config = {
    matcher : [
        "/r/:id",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}