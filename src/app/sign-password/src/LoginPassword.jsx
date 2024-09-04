'use client'
import {useForm} from 'react-hook-form'
import Link from 'next/link'
import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const LoginPassword = () => {
  const {
    register,
    handleSubmit,

    formState: {errors},
  } = useForm()

  const onSubmit = data => {
    console.log(data)
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
          onSubmit={handleSubmit(onSubmit)} // Asociar handleSubmit al form
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
        {errors.password && <span>{errors.password.message}</span>}{' '}
      </div>
    </main>
  )
}

export default LoginPassword
