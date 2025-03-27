import {NextResponse} from 'next/server'

export function middleware(request) {
  // Este middleware solo registrará la solicitud
  console.log(`Middleware: Ruta accedida - ${request.nextUrl.pathname}`)
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashBoard/:path*', '/account/:path*'],
}
