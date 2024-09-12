import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  // console.log(req.nextUrl);

  // console.log(`Request URL: ${url}`);
  // console.log(`Request Pathname: ${pathname}`);

  // Remove 'www' subdomain if present
  const subDomains = url.startsWith("www.")
    ? url.split(".")[1]
    : url.split(".")[0];

  // List of paths to ignore from subdomain logic
  const ignorePaths = [
    "/favicon.ico",
    "/login",
    "/register",
    "/something-else",
  ];

  // If path matches any of the ignored paths, proceed normally
  if (ignorePaths.some((ignorePath) => pathname.startsWith(ignorePath))) {
    console.log("Ignoring path");
    return NextResponse.next();
  }

  // If on localhost or valid subdomain, proceed without rewriting
  if (subDomains === "localhost:3000" || subDomains === "asrtechsolution") {
    return NextResponse.next();
  }

  // For other subdomains, rewrite the pathname
  const newUrl = req.nextUrl.clone();
  newUrl.pathname = `/${subDomains}${pathname}`;
  return NextResponse.rewrite(newUrl);
}
