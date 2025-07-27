import { createEdgeRouter } from 'next-connect'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { clerkMiddleware } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// export default clerkMiddleware();
// export default createMiddleware(routing);

const router = createEdgeRouter<NextRequest, NextFetchEvent>()

router.use(async (request, event, next) => {
  console.log(`${request.method} ${request.url}`)
  return next()
})

router.use(clerkMiddleware())
router.use(() => createMiddleware(routing))

router.all(() => NextResponse.next())
export function middleware(request: NextRequest, event: NextFetchEvent) {
  return router.run(request, event)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
