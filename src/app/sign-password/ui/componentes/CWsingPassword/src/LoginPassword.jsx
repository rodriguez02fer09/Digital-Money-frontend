'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'

import {useRouter} from 'next/navigation'
import {passwordForm} from '../../../../data/forms/default'
import Form from '../../../../../cross/ui/composite-wrappers/loguinPasswordForm'

import Input from '../../../../../cross/ui/components/input/index'
import Button from '../../../../../cross/ui/components/button'

const LoginPassword = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const router = useRouter()

  const handlePassword = password => {
    setCredencials(prevAccount => ({
      ...prevAccount,
      password: password,
    }))
  }

  const onSubmit = data => {
    handlePassword(data.password)
    loguin(credencials.email, data.password)
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
