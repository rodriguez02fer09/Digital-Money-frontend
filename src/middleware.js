import {NextResponse} from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const {pathname} = request.nextUrl

  // Rutas protegidas (requieren autenticación)
  const protectedRoutes = [
    '/dashBoard/home',
    '/dashBoard/activity',
    '/dashBoard/perfil',
    '/dashBoard/depositMoney',
    '/dashBoard/paymentService',
    '/dashBoard/cards',
  ]

  // Rutas de autenticación (no accesibles si ya estás autenticado)
  const authRoutes = [
    '/account/sign-email',
    '/account/sign-password',
    '/account/create',
  ]

  // 1. Redirigir si no está autenticado y accede a ruta protegida
  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    const loginUrl = new URL('/account/sign-email', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // 2. Redirigir si está autenticado y accede a ruta de auth
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashBoard/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashBoard/:path*', '/account/:path*'],
}
