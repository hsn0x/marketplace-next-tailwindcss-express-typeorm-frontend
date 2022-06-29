import { NextResponse } from "next/server";
import cookie from "js-cookie";
import { getTokenCookie } from "../../lib/auth-cookie";

const middleware = async (request) => {
    const pathname = request.nextUrl.pathname;
    const protectedPath = [
        "/products/create",
        "/products/edit",
        "/products/delete",
    ];
    const authCookie = await getTokenCookie(request);

    if (protectedPath.includes(pathname) && !authCookie) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    return NextResponse.next();
};

export default middleware;
