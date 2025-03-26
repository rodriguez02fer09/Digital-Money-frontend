import {NextResponse} from 'next/server'

export async function middleware(request) {
  const {pathname} = request.nextUrl

  // Rutas protegidas
  const protectedRoutes = [
    '/dashBoard/home',
    '/dashBoard/activity',
    '/dashBoard/perfil',
    '/dashBoard/depositMoney',
    '/dashBoard/paymentService',
    '/dashBoard/cards',
  ]

  // Rutas de auth
  const authRoutes = ['/account/sign-email', '/account/sign-password']

  // Para rutas protegidas, simplemente permitir el paso
  // La redirección se manejará en el cliente
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // Para rutas de auth, también permitir el paso
  if (authRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashBoard/:path*', '/account/:path*'],
}
