import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies as getCookies } from "next/dist/server/request/cookies";
import { isEmpty } from "lodash";
import { getAuthentication } from "@/core/auth";

export async function middleware(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);

  const cookies = await getCookies();
  const jsonString = cookies.get("__CARE_HUB_AUTH_SESSION__")?.value ?? "{}";
  //
  const value = JSON.parse(jsonString);

  // const authentication = await getAuthentication();

  if (!value.id) {
    const url = new URL("/sign-in", request.url);
    return NextResponse.redirect(url);
  }

  // A workaround to bypass the edge runtime limitation for using redis
  // since we can't use redis in the edge runtime, we'll use a fetch request
  const res = await fetch(`http://localhost:3000/api/check-session?token=${value.id}`);
  console.log({ res: res.status });

  // if (!res.ok) {
  //   const url = new URL("/sign-in", request.url);
  //   return NextResponse.redirect(url);
  // } else {
  //   res.json().then(
  //     (data) => {
  //       console.log("data", data);
  //       if (isEmpty(data)) {
  //         if (isEmpty(data.accessToken) || isEmpty(data.refreshToken)) {
  //           const url = new URL("/sign-in", request.url);
  //           return NextResponse.redirect(url);
  //         }
  //       }
  //     }
  //   );
  //
  // }

  //
  // if (!authenticated) {
  //   const url = new URL("/sign-in", request.url);
  //   return NextResponse.redirect(url);
  // }

  // requestHeaders.delete("cookie");
  //
  // // Create a new request with the updated headers
  // const newRequest = new Request(request.url, {
  //   ...request, headers: requestHeaders
  // });

  // return NextResponse.next(newRequest);

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all paths except /login and /sign-up
    "/((?!sign-in|sign-up|api|_next/static|_next/image|favicon.ico).*)"
  ]
};
