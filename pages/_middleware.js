// middleware.ts
import { NextResponse } from "next/server";
import { serialize, parse } from "cookie";
import { getTokenCookie, parseCookies } from "../lib/auth-cookie";

export function middleware(req) {
    // const authUser = req.session?.user;
    // console.log("from middleware", { req });
    // me();
    // return NextResponse.redirect(new URL("/", request.url));
    // request.user = { name: "John" };
    // console.log(request.session);
    // console.log(parse(req.cookies));

    // const cookie = parseCookies(req);

    // console.log(cookie);
    return NextResponse.next();
}
