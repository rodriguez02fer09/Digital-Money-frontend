'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import '../styles/desktop.scss'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import Button from '@domains/cross/ui/components/button/src/Button'
import SloganAvatar from '@domains/cross/ui/components/sloganAvatar/src/sloganAvatar'
import UserAvatar from '@domains/cross/ui/components/userAvatar/src/UserAvatar'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

import MenuDesplegable from '@domains/cross/ui/components/menuDesplegable/src/MenuDesplegable'

const Avatar = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleSignUp = () => {
    router.push('/account/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/account/create')
  }

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

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
        <div className="contain-avatar--button">
          <Button
            size="sign-up"
            label="Ingresar"
            color="black"
            onClick={handleSignUp}
          />
          <Button
            size="create-acount"
            color="green"
            label="Crear cuenta"
            onClick={handleCreateAccount}
          />
        </div>
      )}
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
      {menuOpen && (
        <div className="menu-desplegable">
          <MenuDesplegable />
        </div>
      )}
    </div>
  )
}

export default Avatar
