'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import '../styles/desktop.scss'
import Image from 'next/image'
import {useRouter, usePathname} from 'next/navigation'
import Button from '@domains/cross/ui/components/button/src/Button'
import SloganAvatar from '@domains/cross/ui/components/sloganAvatar/src/sloganAvatar'
import UserAvatar from '@domains/cross/ui/components/userAvatar/src/UserAvatar'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import MenuDesplegable from '@domains/cross/ui/components/menuDesplegable/src/MenuDesplegable'

const Avatar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const {user, isLogin, fetchAccount, setUser} = useAccountStore()

  useEffect(() => {
    fetchAccount()
  }, [fetchAccount])

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [setUser])

  useEffect(() => {
    // Detectar si es una pantalla mobile o tablet
    const checkMobile = () => setIsMobile(window.innerWidth <= 834)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSignUp = () => {
    router.push('/account/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/account/create')
  }

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const isAuthPage =
    pathname === '/account/sign-email' || pathname === '/account/sign-password'
  const isRegisterPage = pathname === '/account/create'

  return (
    <div className={`contain-avatar ${isLogin && user ? 'logged-in' : ''}`}>
      {isLogin && user ? (
        <>
          <SloganAvatar {...user} />
          <Link href="/dashBoard/home" className="link">
            <UserAvatar {...user} />
          </Link>
        </>
      ) : (
        !isAuthPage && (
          <div className="contain-avatar--button">
            <Button
              size="sign-up"
              label="Ingresar"
              color="black"
              onClick={handleSignUp}
            />
            {!isRegisterPage && (
              <Button
                size="create-acount"
                color="green"
                label="Crear cuenta"
                onClick={handleCreateAccount}
              />
            )}
          </div>
        )
      )}

      {isLogin && user && isMobile && (
        <div className="contain-avatar--menu">
          <Image
            src="/images/iconMenú.svg"
            width={40}
            height={40}
            alt="Abrir menú"
            onClick={toggleMenu}
            style={{cursor: 'pointer'}}
          />
        </div>
      )}
      {menuOpen && (
        <div className="menu-desplegable">
          <MenuDesplegable />
        </div>
      )}
    </div>
  )
}

export default Avatar
