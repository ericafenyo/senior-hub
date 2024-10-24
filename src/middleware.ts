import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isAuthenticated } from "@/core/auth";

export async function middleware(request: NextRequest) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    const url = new URL("/sign-in", request.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all paths except /login and /sign-up
    "/((?!sign-in|sign-up|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
