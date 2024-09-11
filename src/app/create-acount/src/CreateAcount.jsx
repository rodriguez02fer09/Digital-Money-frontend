'use client'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'
import '../styles/desktop.scss'

const CreateAcount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    getValues,
  } = useForm()
  const router = useRouter()

  const onSubmit = data => {
    console.log('Datos enviados:', data)

    fetch('https://digitalmoney.digitalhouse.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(result => result.json())
      .then(result => {
        console.log('Usuario registrado con éxito:', result)

        router.push('/successful-register')
      })
      .catch(error => {
        console.error('Detalles del error:', error)
      })
  }

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
            color={errors.firstname ? 'red' : 'black'}
            placeholder={'Nombre*'}
            type="text"
            {...register('firstname', {
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
            color={errors.lastname ? 'red' : 'black'}
            placeholder={'Apellido*'}
            type="text"
            {...register('lastname', {
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
            {...register('dni', {
              required: 'El campo DNI es obligatorio.',
              pattern: {
                value: /^[0-9]+$/,
                message: 'El DNI solo puede contener números.',
              },
              setValueAs: value => parseInt(value, 10),
            })}
          />

          <Input
            size={'large'}
            color={errors.email ? 'red' : 'black'}
            placeholder={'Correo electrónico*'}
            type="email"
            {...register('email', {
              required: 'Correo es requerido',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Correo no válido',
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.password ? 'red' : 'black'}
            placeholder={'Contraseña*'}
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

          <Input
            size={'large'}
            color={errors.confirmPassword ? 'red' : 'black'}
            placeholder={'Confirmar contraseña*'}
            type="password"
            {...register('confirmPassword', {
              required: 'La confirmación de la contraseña es requerida',
              validate: value => {
                const password = getValues('password')
                return value === password || 'Las contraseñas no coinciden'
              },
            })}
          />

          <Input
            size={'large'}
            color={errors.phone ? 'red' : 'black'}
            placeholder={'Teléfono*'}
            type="tel"
            {...register('phone', {
              required: 'El campo teléfono es obligatorio.',
            })}
          />

          <Button size={'large'} label={'Crear cuenta'} color={'green'} />
        </form>

        {getMessage() && <span>{getMessage()}</span>}
      </div>
    </main>
  )
}

export default CreateAcount
