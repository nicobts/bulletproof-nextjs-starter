import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export const middleware = auth()

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs',
}
