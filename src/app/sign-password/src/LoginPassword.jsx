'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'

import {useRouter} from 'next/navigation'

import {useContext} from 'react'

import {UserContext} from '../../../Context/index'

import Input from '../../cross/ui/components/input/index'
import Button from '../../cross/ui/components/button'

const LoginPassword = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const router = useRouter()
  const {credencials, setCredencials, setToken} = useContext(UserContext)

  const handlePassword = password => {
    setCredencials(prevAccount => ({
      ...prevAccount,
      password: password,
    }))
  }

  const loguin = async (email, password) => {
    const response1 = await fetch(
      'https://digitalmoney.digitalhouse.com/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      },
    )
      .catch(error => {
        throw new Error('La respuesta de la red no fue correcta' + error)
      })
      .then(response => response.json())
      .then(({token}) => {
        setToken(prevAccount => token)
        router.push('/')
      })
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
        <form
          className={`${defaultClass}--containForm`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            size={'large'}
            placeholder={'Contraseña'}
            color={errors.password ? 'red' : 'black'}
            type="password"
            {...register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 5,
                message: 'La contraseña debe tener al menos 5 caracteres',
              },
              pattern: {
                value: /^(?=.*[a-z]).*$/,
                message:
                  'La contraseña debe contener al menos una letra minúscula',
              },
            })}
          />

          <Button
            size={'large'}
            label={'Continuar'}
            color={'green'}
            type="submit"
          />
        </form>
        {errors.password && <span>{errors.password.message}</span>}
      </div>
    </main>
  )
}

export default LoginPassword
