import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);

  // CyberPanel/OpenLiteSpeed can duplicate the host header,
  // producing "exagic.ai, exagic.ai" which breaks new URL().
  // Take only the first value if duplicated.
  const host = requestHeaders.get("host");
  if (host && host.includes(",")) {
    requestHeaders.set("host", host.split(",")[0].trim());
  }

  const xForwardedHost = requestHeaders.get("x-forwarded-host");
  if (xForwardedHost && xForwardedHost.includes(",")) {
    requestHeaders.set(
      "x-forwarded-host",
      xForwardedHost.split(",")[0].trim()
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // Run on all paths except static files and images
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
