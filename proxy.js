import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

console.log("PROXY FILE LOADED");

export async function proxy(request) {
  console.log("PROXY RUNNING:", request.nextUrl.pathname);

  const token = request.cookies.get("token")?.value;

  console.log("TOKEN:", token ? "YES" : "NO");

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  try {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET
    );

    await jwtVerify(token, secret);

    return NextResponse.next();
  } catch (error) {
    console.error("Proxy JWT error:", error);

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }
}

export const config = {
  matcher: [
    "/checkout/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/settings/:path*",
  ],
};