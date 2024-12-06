'use client'
import '../styles/desktop.scss'

import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'

const Avatar = () => {
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-acount')
  }

  return (
    <>
      <Button
        size="sign-up"
        label="Ingresar"
        href="/sign-email"
        color="black"
        onClick={handleSignUp}
      />
      <Button
        size="create-acount" // Ajusta el tamaño como necesites
        color="green"
        label="Crear cuenta"
        href="/create-account"
        onClick={handleCreateAccount}
      />
    </>
  )
}

export default Avatar
