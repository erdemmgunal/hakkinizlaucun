import { NextResponse } from "next/server";

export async function middleware(request) {
    console.log(request.nextUrl.pathname);
    if (request.nextUrl.pathname === "/r/:id") {
        return NextResponse.next();
    }
}

export const config = {
    matcher : [
        "/r/:id",
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}