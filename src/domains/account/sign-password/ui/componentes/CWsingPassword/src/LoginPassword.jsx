'use client'
import '../styles/desktop.scss'

import {useEffect} from 'react'

import {useForm} from 'react-hook-form'

import {useRouter} from 'next/navigation'

import {useAuthStore} from '@domains/account/sign-email/core/hoocks/useAuthStore'
import {requestSignPassword} from '@domains/account/sign-password/core/uses-cases/request-signPassword'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import {passwordForm} from '@domains/account/sign-password/data/forms/default'

import Form from '@domains/cross/ui/composite-wrappers/loguinPasswordForm'

import Input from '@domains/cross/ui/components/input/index'
import Button from '@domains/cross/ui/components/button'

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
        console.log('Correo recuperado del localStorage:', storeEmail)
        setEmail(storeEmail)
      } else {
        console.log('No se encontró correo, redirigiendo a /sign-email')
        router.push('/account/sign-email') // Redirigir si no hay correo
      }
    } else {
      console.log('Correo en el estado:', email)
    }
  }, [email, setEmail, router])

  const rq = response => {
    console.log('Respuesta de la API:', response)
  }

  const onSubmit = async data => {
    requestSignPassword({email, password: data.password}, async result => {
      const {success, data} = result
      if (success) {
        // 1. Guardar token
        localStorage.setItem('token', data.token)

        // 2. Forzar carga de datos
        await new Promise(resolve => {
          useAccountStore.getState().fetchAccount()
          setTimeout(resolve, 300) // Espera suficiente
        })

        // 3. Redirigir
        window.location.href = '/dashBoard/home' // Usamos location.href para asegurar recarga
      }
    })
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
