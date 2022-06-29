import { NextResponse } from "next/server";
import cookie from "js-cookie";

import { getTokenCookie } from "../../lib/auth-cookie";

const isAuthMiddlware = async (req) => {
    return NextResponse.next();
};

export default isAuthMiddlware;
