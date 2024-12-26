'use client'

import '../styles/desktop.scss'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import useAccount from '../../../../../cross/core/hoocks/useAccount/src/useAccount'
import {useState} from 'react'
import MenuDesplegable from '../../menuDesplegable'

const Avatar = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const {account, isLogin} = useAccount()

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
    <div className={`contain-avatar ${isLogin && account ? 'logged-in' : ''}`}>
      {isLogin && account ? (
        <>
          <SloganAvatar {...account} />
          <UserAvatar {...account} />
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
