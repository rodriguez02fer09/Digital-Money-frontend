'use client'

import '../styles/desktop.scss'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import {useEffect, useState} from 'react'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import Image from 'next/image'

const Avatar = () => {
  const getCurrentLoguin = () => {
    return localStorage.getItem('token') === null ? false : true
  }
  const [isLoguin, setIsLoguin] = useState(getCurrentLoguin())
  const router = useRouter()

  useEffect(() => {
    setIsLoguin(getCurrentLoguin())
  }, [])

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
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
        <>
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
        </>
      )}
      <div className={`${defaultAvatar}--menu`}>
        <Image src="/images/iconMenú.svg" width={40} height={40} alt="Arrow" />
      </div>
    </div>
  )
}

export default Avatar
