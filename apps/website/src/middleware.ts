import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ACCESS_TOKEN } from '@const/cookies';
import { Route } from '@const/route';

export function middleware(request: NextRequest): NextResponse {
  const accessToken = request.cookies.get(ACCESS_TOKEN);

  if (accessToken && request.nextUrl.pathname === Route.Login) {
    return NextResponse.redirect(new URL(Route.Product, request.url));
  }

  // Unauthorised user (no session token) - redirect to Login page
  if (!accessToken && request.nextUrl.pathname !== Route.Login) {
    return NextResponse.redirect(new URL(Route.Login, request.url));
  }

  // Any other scenario should be passed through as normal request
  const response = NextResponse.next();

  // Opt-out from caching Middleware Preflight
  // https://github.com/vercel/next.js/issues/30938
  response.headers.set('x-middleware-cache', 'no-cache');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
