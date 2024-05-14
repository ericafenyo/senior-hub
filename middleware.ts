import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isAuthenticated, invalidate } from "./app/auth/actions";

export async function middleware(request: NextRequest) {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    await invalidate();
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/senior/:path",
    "/caretaker/:path",
    "/settings/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
