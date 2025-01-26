import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isAuthenticated } from "@/core/auth";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    const url = new URL("/sign-in", request.url);
    return NextResponse.redirect(url);
  }

  requestHeaders.delete("cookie");

  // Create a new request with the updated headers
  const newRequest = new Request(request.url, {
    ...request, headers: requestHeaders
  });

  return NextResponse.next(newRequest);
}

export const config = {
  matcher: [
    // Protect all paths except /login and /sign-up
    "/((?!sign-in|sign-up|api|_next/static|_next/image|favicon.ico).*)"
  ]
};
