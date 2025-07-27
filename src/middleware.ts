// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'

const clerk = clerkMiddleware()
const intl = createMiddleware(routing)

export function middleware(req: NextRequest, event: NextFetchEvent) {
  // Apply Clerk Middleware
  const clerkResponse = clerk(req, event)

  if (clerkResponse) {
    return clerkResponse
  }

  // Apply next-intl Middleware
  return intl(req)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'], // This matcher can be adjusted based on your routes
}
