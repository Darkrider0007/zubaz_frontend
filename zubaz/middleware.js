import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  let currentHost;
  if (process.env.NODE_ENV === "production") {
    const baseDomain = process.env.BASE_DOMAIN;
    currentHost = hostname?.replace(`.${baseDomain}`, "");
  } else {
    currentHost = hostname?.split(":")[0].replace(".localhost", "");
  }

  if (!currentHost || currentHost === "localhost") {
    return NextResponse.next();
  }

  // Rewrite the request to the dynamic [subdomain] page
  return NextResponse.rewrite(
    new URL(`/_sites/${currentHost}${url.pathname}`, req.url)
  );
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
