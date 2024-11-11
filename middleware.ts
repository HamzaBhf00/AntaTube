import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'



export function middleware(request: NextRequest) {

  const response = NextResponse.next()



  // Security Headers

  response.headers.set(

    'Content-Security-Policy',

    [

      "default-src 'self'",

      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.youtube.com *.doubleclick.net https://www.gstatic.com https://www.google.com https://vercel.live",

      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

      "font-src 'self' https://fonts.gstatic.com",

      "img-src 'self' data: https: blob:",

      "media-src 'self' https: data: blob:",

      "connect-src 'self' https: *.youtube.com *.doubleclick.net https://www.google.com",

      "frame-src 'self' *.youtube.com",

    ].join('; ')

  )



  // Additional Security Headers

  response.headers.set('X-DNS-Prefetch-Control', 'on')

  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')

  response.headers.set('X-Frame-Options', 'SAMEORIGIN')

  response.headers.set('X-Content-Type-Options', 'nosniff')

  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  response.headers.set('Permissions-Policy', 

    'camera=(), microphone=(), geolocation=(), interest-cohort=()'

  )



  return response

}



export const config = {

  matcher: '/:path*',

} 






