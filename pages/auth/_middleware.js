import { NextResponse } from "next/server";
import cookie from "js-cookie";
import { getTokenCookie } from "../../lib/auth-cookie";
import { axiosServerConfig } from "../../config";

const isAuthMiddlware = async (req) => {
    const authCookie = await getTokenCookie(req);

    if (!authCookie) {
        return NextResponse.next();
    }

    await fetch(axiosServerConfig.baseURL + "/auth/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${authCookie}`,
        },
    })
        .then(async (res) => console.log(await res.json()))
        .catch((err) => {
            console.log(err.response);
            console.log(err);
        });

    // console.log(await profile.json());
    // if (profile.success) {
    //     return NextResponse.next();
    // }

    return NextResponse.redirect(new URL("/", req.url));
};

export default isAuthMiddlware;
