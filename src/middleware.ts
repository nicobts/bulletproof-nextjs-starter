// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'
import { NextFetchEvent, NextRequest } from 'next/server'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}

// const clerk = clerkMiddleware()
// const intl = createMiddleware(routing)

// export function middleware(req: NextRequest, event: NextFetchEvent) {
//   // Apply Clerk Middleware
//   const clerkResponse = clerk(req, event)

//   if (clerkResponse) {
//     return clerkResponse
//   }

//   // Apply next-intl Middleware
//   return intl(req)
// }

// export const config = {
//   matcher: ['/((?!_next|favicon.ico).*)'],
// }
