'use client'
import {useEffect} from 'react'
import {usePathname} from 'next/navigation'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'

export default function AuthChecker() {
  const pathname = usePathname()
  const {validUserIsLogin} = useAccountStore()

  useEffect(() => {
    const token = localStorage.getItem('token') || ''

    if (token) {
      window.location.href = '/dashBoard/home'
    } else {
      window.location.href = '/account/sign-email'
    }
  }, [pathname, validUserIsLogin])

  return null
}
