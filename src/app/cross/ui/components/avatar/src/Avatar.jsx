'use client'

import {useEffect} from 'react'

import '../styles/desktop.scss'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import useAccountStore from '../../../../../cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'
import {useState} from 'react'
import MenuDesplegable from '../../menuDesplegable'

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
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-acount')
  }

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <div className={`contain-avatar ${isLogin && user ? 'logged-in' : ''}`}>
      {isLogin && user ? (
        <>
          <SloganAvatar {...user} />
          <UserAvatar {...user} />
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
