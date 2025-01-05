import {NextResponse} from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('authToken')?.value

  const protectedPaths = [
    '/dashBoard',
    '/dashBoard/perfil',
    '/dashBoard/actividad',
    '/dashBoard/cargarDinero',
    '/dashBoard/cards',
  ]

  if (
    protectedPaths.some(path => request.nextUrl.pathname.startsWith(path)) &&
    !token
  ) {
    console.log('Redirigiendo al login debido a falta de token')
    return NextResponse.redirect(new URL('/login', request.url))
  }
  console.log('Acceso permitido, token encontrado')
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashBoard/:path*'],
}
