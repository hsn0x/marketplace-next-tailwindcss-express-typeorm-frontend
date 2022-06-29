export default function middleware(req) {
    return console.log(req);
}

export const config = {
    matcher: "/",
};
