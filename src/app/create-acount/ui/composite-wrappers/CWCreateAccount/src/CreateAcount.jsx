'use client'
import './styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'

import Form from '../../../../../cross/ui/composite-wrappers/form/index'

import {requestCreateAccount} from 'app/app/create-acount/core/uses-cases/request-create-account'
import {useAcountStore} from '../../../../core/hoocks/useAcountStore'

const CreateAcount = () => {
  const router = useRouter()

  const {account, setAccount} = useAcountStore(state => state)

  const useCallbackCreateAccount = () => {
    console.log('Usuario registrado con éxito:', result)
    router.push('/successful-register')
  }

  const defaultClass = 'mainForm-cuenta'

  const onSubmit = data => {
    console.log(data)
  }
  const inputs = [
    {
      registerData: {
        name: 'firstname',
        //required: 'El nombre es requerido',
        minLength: {
          value: 2,
          message: 'El nombre debe tener al menos 2 caracteres',
        },
        maxLength: {
          value: 50,
          message: 'El nombre no puede tener más de 50 caracteres',
        },
      },
      size: 'large',
      color: 'black',
      placeholder: 'Nombre*',
      type: 'text',
    },
    {
      registerData: {
        name: 'lastname',
        //required: 'El apellido es requerido',
        minLength: {
          value: 2,
          message: 'El apellido debe tener al menos 2 caracteres',
        },
        maxLength: {
          value: 50,
          message: 'El apellido no puede tener más de 50 caracteres',
        },
      },
      size: 'large',
      color: 'black',
      placeholder: 'Apellido*',
      type: 'text',
    },
    {
      registerData: {
        name: 'dni',
        //required: 'El campo DNI es obligatorio.',
      },
      size: 'large',
      color: 'black',
      placeholder: 'DNI*',
      type: 'text',
    },
    {
      registerData: {
        name: 'email',
        //required: 'Correo es requerido',
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: 'Correo no válido',
        },
      },
      size: 'large',
      color: 'black',
      placeholder: 'Correo electrónico*',
      type: 'email',
    },
    {
      registerData: {
        name: 'email',
        //required: 'Correo es requerido',
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: 'Correo no válido',
        },
      },
      size: 'large',
      color: 'black',
      placeholder: 'Contraseña*',
      type: 'password',
    },
    {
      registerData: {
        name: 'confirmPassword',
        //required: 'La confirmación de la contraseña es requerida',
      },
      size: 'large',
      color: 'black',
      placeholder: 'Confirmar contraseña*',
      type: 'password',
    },
    {
      registerData: {
        name: 'phone',
        //required: 'El campo teléfono es obligatorio.',
      },
      size: 'large',
      color: 'black',
      placeholder: 'Teléfono*',
      type: 'tel',
    },
  ]

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--container`}>
        <p className={`${defaultClass}__InfoTitle`}>Crear cuenta</p>
        <Form inputs={inputs} name="createAccount" />

        {/* <form
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
        </form> */}
      </div>
    </main>
  )
}

CreateAcount.displayName = 'CreateAcount'

export default CreateAcount
