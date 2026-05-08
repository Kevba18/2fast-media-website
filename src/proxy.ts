import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = request.nextUrl.pathname === "/wp-sitemap.xml" ? "/sitemap.xml" : "/";
  redirectUrl.search = "";

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: [
    {
      source: "/",
      has: [{ type: "query", key: "p" }],
    },
    "/hello-world/:path*",
    "/wp-sitemap.xml",
    "/wp-admin/:path*",
    "/wp-login.php",
    "/author/:path*",
    "/category/:path*",
  ],
};
