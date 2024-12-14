'use client'

import '../styles/desktop.scss'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import {useEffect, useState} from 'react'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import Image from 'next/image'
import MenuDesplegable from '../../menuDesplegable'

const Avatar = () => {
  const [isLoguin, setIsLoguin] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      setIsLoguin(token !== null)
    }
  }, [])

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
  }

  const toggleMenu = () => {
    console.log('menú abierto')
    setMenuOpen(prev => !prev)
  }

  const defaultAvatar = 'contain-avatar'

  return (
    <div className={`${defaultAvatar}`}>
      {isLoguin ? (
        <>
          <SloganAvatar />
          <UserAvatar />
        </>
      ) : (
        <div className={`${defaultAvatar}--button`}>
          <Button
            size="sign-up"
            label="Ingresar"
            color="black"
            onClick={handleSignUp}
          />
          <Button
            size="create-account"
            color="green"
            label="Crear cuenta"
            onClick={handleCreateAccount}
          />
        </div>
      )}
      <div className={`${defaultAvatar}--menu`}>
        <Image
          src="/images/iconMenú.svg"
          width={40}
          height={40}
          alt="Abrir menú"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && <MenuDesplegable />}
    </div>
  )
}

export default Avatar
