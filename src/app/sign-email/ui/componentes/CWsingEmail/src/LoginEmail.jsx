'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import {useAuthStore} from '../../../../../sign-email/core/hoocks/UseAuthStore'
import Form from '../../../../../cross/ui/composite-wrappers/LoginEmailForm'
import {emailForm} from '../../../../data/forms/default'

const LoginEmail = () => {
  // Usando Zustand para gestionar el estado global

  const {email, setEmail} = useAuthStore()
  // Inicializando react-hook-form
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  // Usamos el enrutador para redirigir al usuario después del login
  const router = useRouter()

  // Función que maneja el envío del formulario
  const onSubmit = data => {
    debugger
    console.log('Correo:', data.email)
    setEmail(data.email) // Guardamos el correo en el estado global
    localStorage.setItem('email', data.email)
    router.push('/sign-password') // Redirige a la página de contraseña
  }

  // Definición de clase para el componente
  const defaultClass = 'mainContain-email'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--container`}>
        <p className={`${defaultClass}__InfoTitle`}>¡Hola! Ingresá tu e-mail</p>
        <Form
          // Pasamos el método de onSubmit y las propiedades del formulario
          callBackOnSubmit={onSubmit} // Se pasa handleSubmit
          inputs={emailForm} // Usamos emailForm para las entradas
          name="loginEmail"
          className={`${defaultClass}--loginEmail`}
        />
      </div>
    </main>
  )
}

LoginEmail.displayName = 'LoginEmail'
export default LoginEmail
