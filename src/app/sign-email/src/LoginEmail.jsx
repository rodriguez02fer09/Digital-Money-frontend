'use client'
import {useForm} from 'react-hook-form'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'
import '../styles/desktop.scss'

const LoginEmail = ({
  inputColor,
  greetingText,
  inputSize,
  inputPlaceholder,
  buttonSize,
  buttonColor,
  buttonLabel,
  buttonHref,
}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = data => console.log(data)

  const defaultClass = 'mainContain-email'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--containForm`}>
        <div className={`${defaultClass}--containText`}>
          <p>{'¡Hola! Ingresá tu e-mail'}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${defaultClass}--containInput`}
        >
          <Input
            size={'large'}
            placeholder={'Correo electronico'}
            color={errors.email ? 'red' : 'black'}
            type="email"
            name="email"
            {...register('email', {
              required: 'Correo es requerido',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo no válido',
              },
            })}
          />

          <Button
            type="submit"
            size={'large'}
            label={'Continuar'}
            color={'green'}
            href={'/sign-password'}
          />
          <Button
            size="large"
            label="Crear cuenta"
            color="grey"
            href="/create-account"
          />
        </form>
        {errors.email && <span>{errors.email.message}</span>}
      </div>
    </main>
  )
}

export default LoginEmail
