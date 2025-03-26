'use client'
import {useEffect} from 'react'
import {usePathname, useRouter} from 'next/navigation'

export default function RouteGuard({children}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const isProtectedRoute = [
      '/dashBoard/home',
      '/dashBoard/activity',
      '/dashBoard/perfil',
      '/dashBoard/depositMoney',
      '/dashBoard/paymentService',
      '/dashBoard/cards',
    ].some(route => pathname.startsWith(route))

    const isAuthRoute = ['/account/sign-email', '/account/sign-password'].some(
      route => pathname.startsWith(route),
    )

    if (!token && isProtectedRoute) {
      router.push('/account/sign-email')
    } else if (token && isAuthRoute) {
      router.push('/dashBoard/home')
    }
  }, [pathname, router])

  return children
}
