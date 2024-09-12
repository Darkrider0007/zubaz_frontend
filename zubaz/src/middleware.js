// middleware.ts

import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.headers.get("host");
  console.log(url);

  const subDomains = url.split(".")[0];

  console.log(subDomains);

  if (subDomains !== "zubaz-frontend" && subDomains !== "localhost:3000") {
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${subDomains}`;
    return NextResponse.rewrite(newUrl);
  }

  // const hostname = req.nextUrl.hostname;

  // // Extract subdomain from the hostname
  // const subdomain = hostname.split(".")[0];

  // // If it's not localhost and there is a subdomain (e.g., test.localhost)
  // if (hostname !== "localhost" && subdomain !== "localhost") {
  //   // Rewrite to the dynamic subdomain route
  //   const url = req.nextUrl.clone();
  //   url.pathname = `/${subdomain}`; // Map to /[subdomain] page
  //   return NextResponse.rewrite(url);
  // }

  return NextResponse.next(); // Proceed normally for non-subdomains
}
