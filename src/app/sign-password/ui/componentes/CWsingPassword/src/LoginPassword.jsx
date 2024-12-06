'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useAuthStore} from '../../../../../sign-email/core/hoocks/UseAuthStore'
import {useRouter} from 'next/navigation'
import {passwordForm} from '../../../../data/forms/default'
import Form from '../../../../../cross/ui/composite-wrappers/loguinPasswordForm'
import requestSignPassword from '../../../../core/uses-cases/request-signPassword'
import Input from '../../../../../cross/ui/components/input/index'
import Button from '../../../../../cross/ui/components/button'
import {useEffect} from 'react'

const LoginPassword = () => {
  const {email, setEmail} = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const router = useRouter()

  useEffect(() => {
    if (!email) {
      const storeEmail = localStorage.getItem('email')
      if (storeEmail) {
        setEmail(storeEmail)
      } else {
        router.push('/sign-email') // Redirigir a la pantalla de correo si no hay correo
      }
    }
  }, [email, setEmail])

  const rq = r => {
    console.log(r)
  }

  const onSubmit = data => {
    requestSignPassword(
      {
        email,
        password: data.password,
      },
      rq,
    )
  }

  const defaultClass = 'mainContainForm-password'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--containFrom`}>
        <div className={`${defaultClass}--containtex`}>
          <p>{'Ingresá tu contraseña'}</p>
        </div>
        <Form
          // Pasamos el método de onSubmit y las propiedades del formulario
          callBackOnSubmit={onSubmit} // Se pasa handleSubmit
          inputs={passwordForm} // Usamos emailForm para las entradas
          name="loginPassword"
          className={`${defaultClass}--loginPassword`}
        />
      </div>
    </main>
  )
}
LoginPassword.displayName = 'LoginPassword'
export default LoginPassword
