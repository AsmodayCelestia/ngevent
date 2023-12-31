import { NextResponse } from 'next/server';
import { readPayloadJose } from './lib/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Uncomment for debugging
  // console.log(request.url, "<<<<middleware");

  // Check if the request is for the products API
  if (request.url.includes("api/products")) {
    const authorizationCookie = request.cookies?.get("Authorization") as string | undefined;
    // Uncomment for debugging
    // console.log(authorizationCookie, "middleware auth");

    if (!authorizationCookie) {
      return NextResponse.json(
        {
          message: "Authentication Failed",
        },
        { status: 401 }
      );
    }

    const authorizationParts = authorizationCookie.split(" ");
    if (authorizationParts.length !== 2) {
      return NextResponse.json(
        {
          message: "Invalid Authorization format",
        },
        { status: 401 }
      );
    }

    const [, token] = authorizationParts;
    const decodedUser = readPayloadJose<{ _id: string; email: string }>(token);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", (await decodedUser)._id);
    requestHeaders.set("x-user-email", (await decodedUser).email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }

  // If the request is for the login endpoint, proceed without access token check
  if (!request.url.includes("api/users/login")) {
    const authorizationCookie = request.cookies?.get("Authorization") as string | undefined;
    // Uncomment for debugging
    // console.log(authorizationCookie, "middleware auth");

    if (!authorizationCookie) {
      return NextResponse.json(
        {
          message: "Authentication Failed",
        },
        { status: 401 }
      );
    }

    const authorizationParts = authorizationCookie.split(" ");
    if (authorizationParts.length !== 2) {
      return NextResponse.json(
        {
          message: "Invalid Authorization format",
        },
        { status: 401 }
      );
    }

    const [, token] = authorizationParts;
    const decodedUser = readPayloadJose<{ _id: string; email: string }>(token);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", (await decodedUser)._id);
    requestHeaders.set("x-user-email", (await decodedUser).email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    return response;
  }

  // For all other cases, proceed without access token check
  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: '/api/:path*',
};

