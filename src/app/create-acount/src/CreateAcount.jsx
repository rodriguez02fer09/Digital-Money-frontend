'use client'
import {useForm} from 'react-hook-form'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'
import '../styles/desktop.scss'
import Link from 'next/link'

const CreateAcount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const onSubmit = data => console.log(data)

  const password = watch('password')

  const getMessage = () => {
    if (Object.keys(errors).length > 0) {
      return 'Todos los campos son requeridos'
    }
    return ''
  }

  const defaultClass = 'mainForm-cuenta'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--container`}>
        <p className={`${defaultClass}__InfoTitle`}>Crear cuenta</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${defaultClass}--containInfo`}
        >
          <Input
            size={'large'}
            color={errors.nombre ? 'red' : 'black'}
            placeholder={'Nombre'}
            type="text"
            name="nombre"
            {...register('nombre', {
              required: 'El nombre es requerido',
              minLength: {
                value: 2,
                message: 'El nombre debe tener al menos 2 caracteres',
              },
              maxLength: {
                value: 50,
                message: 'El nombre no puede tener más de 50 caracteres',
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.apellido ? 'red' : 'black'}
            placeholder={'Apellido*'}
            type="text"
            name="apellido"
            {...register('apellido', {
              required: 'El apellido es requerido',
              minLength: {
                value: 2,
                message: 'El apellido debe tener al menos 2 caracteres',
              },
              maxLength: {
                value: 50,
                message: 'El apellido no puede tener más de 50 caracteres',
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.dni ? 'red' : 'black'}
            placeholder={'DNI*'}
            type="text"
            name="dni"
            {...register('dni', {
              required: 'El campo DNI es obligatorio.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'El DNI solo puede contener números.',
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.email ? 'red' : 'black'}
            placeholder={'Correo electrónico*'}
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
        </form>
        <p className={`${defaultClass}--InfoPassword`}>
          Usa entre 6 y 20 caracteres (debe contener al menos 1 carácter
          especial, una mayúscula y un número).
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${defaultClass}--containPassword `}
        >
          <Input
            size={'large'}
            color={errors.password ? 'red' : 'black'}
            placeholder={'Contraseña*'}
            type="password"
            name="password"
            {...register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 5 caracteres',
              },
              pattern: {
                value: /^(?=.*[a-z]).*$/,
                message:
                  'La contraseña debe contener al menos una letra minúscula',
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.confirmPassword ? 'red' : 'black'}
            placeholder={'Confirmar contraseña*'}
            type="password"
            name="confirmPassword"
            {...register('confirmPassword', {
              required: 'La confirmación de la contraseña es requerida',
              validate: value =>
                value === password || 'Las contraseñas no coinciden',
            })}
          />
          <Input
            size={'large'}
            color={errors.telefono ? 'red' : 'black'}
            placeholder={'Teléfono*'}
            type="tel"
            name="telefono"
            {...register('telefono', {
              required: 'El campo teléfono es obligatorio.',
              pattern: {
                value: /^[0-9]+$/,
              },
            })}
          />
          <Link href="/successful-register" passHref>
            <Button size={'large'} label={'Crear cuenta'} color={'green'} />
          </Link>
        </form>

        {getMessage() && <span>{getMessage()}</span>}
      </div>
    </main>
  )
}

export default CreateAcount
