'use client'
import {useEffect, useState} from 'react'
import {usePathname, useRouter} from 'next/navigation'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'

export default function RouteGuard({children}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const {validUserIsLogin, fetchAccount, user} = useAccountStore()

  useEffect(() => {
    const protectRoutes = async () => {
      setIsLoading(true)

      // Verificar autenticación
      const isAuthenticated = validUserIsLogin()

      // Si está autenticado pero no tiene datos, cargarlos
      if (isAuthenticated && !user) {
        await new Promise(resolve => {
          fetchAccount()
          setTimeout(resolve, 300) // Espera suficiente para la carga
        })
      }

      // Definir rutas
      const protectedRoutes = [
        '/dashBoard/home',
        '/dashBoard/activity',
        '/dashBoard/perfil',
        '/dashBoard/depositMoney',
        '/dashBoard/paymentService',
        '/dashBoard/cards',
      ]

      const authRoutes = ['/account/sign-email', '/account/sign-password']

      // Lógica de redirección
      if (
        !isAuthenticated &&
        protectedRoutes.some(route => pathname.startsWith(route))
      ) {
        router.replace('/account/sign-email')
      } else if (
        isAuthenticated &&
        authRoutes.some(route => pathname.startsWith(route))
      ) {
        router.replace('/dashBoard/home')
      }

      setIsLoading(false)
    }

    protectRoutes()
  }, [pathname, router, validUserIsLogin, fetchAccount, user])

  if (isLoading) {
    return (
      <div className="full-page-loading">
        {/* Agrega tu spinner o componente de carga */}
        <p>Cargando...</p>
      </div>
    )
  }

  return children
}
