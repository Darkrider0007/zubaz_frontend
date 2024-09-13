import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.headers.get("host") || "";
  const { pathname } = req.nextUrl;

  // Remove 'www.' prefix and port number if present
  const host = url.startsWith("www.") ? url.substring(4) : url;
  const hostWithoutPort = host.split(":")[0]; // Remove port number

  // Extract subdomain
  const subDomains = hostWithoutPort.split(".");
  const subDomain = subDomains.length > 1 ? subDomains[0] : null;

  // List of paths to ignore from subdomain logic
  const ignorePaths = [
    "/favicon.ico",
    "/login",
    "/register",
    "/something-else",
    "/_next/", // Added to ignore static assets
    "/api/", // Added to ignore API routes
  ];

  // If path matches any of the ignored paths, proceed normally
  if (ignorePaths.some((ignorePath) => pathname.startsWith(ignorePath))) {
    return NextResponse.next();
  }

  // If on main domain or localhost, proceed without rewriting
  if (
    !subDomain ||
    subDomain === "localhost" ||
    subDomain === "asrtechsolution"
  ) {
    return NextResponse.next();
  }

  // For other subdomains, rewrite the pathname
  const newUrl = req.nextUrl.clone();
  newUrl.pathname = `/${subDomain}${pathname}`;
  console.log("Rewriting to:", newUrl.pathname);
  return NextResponse.rewrite(newUrl);
}
