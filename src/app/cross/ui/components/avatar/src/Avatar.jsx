'use client'

import '../styles/desktop.scss'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import useAccount from '../../../../../cross/core/hoocks/useAccount/src/useAccount'

const Avatar = () => {
  const router = useRouter()
  const {account, isLogin} = useAccount()

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
  }

  const defaultAvatar = 'contain-avatar'

  return (
    <div className={`${defaultAvatar}`}>
      {isLogin && account ? (
        <>
          <SloganAvatar {...account} />
          <UserAvatar {...account} />
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
              size="create-account" // Corregido el nombre del tamaño
              color="green"
              label="Crear cuenta"
              onClick={handleCreateAccount}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Avatar
