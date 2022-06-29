// middleware.ts
import { NextResponse } from "next/server";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/reducers/user";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // me();
    // return NextResponse.redirect(new URL("/", request.url));
    // request.user = { name: "John" };
    // console.log(request.session);
    return NextResponse.next();
}
