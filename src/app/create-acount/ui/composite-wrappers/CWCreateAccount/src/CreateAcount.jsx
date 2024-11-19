'use client'
import './styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'

import Form from '../../../../../cross/ui/composite-wrappers/form/index'

import {requestCreateAccount} from 'app/app/create-acount/core/uses-cases/request-create-account'
import {useAcountStore} from '../../../../core/hoocks/useAcountStore'
import {useEffect} from 'react'

const CreateAcount = () => {
  const router = useRouter()

  const {account, setAccount} = useAcountStore()

  const useCallbackCreateAccount = () => {
    console.log('Usuario registrado con éxito:', result)
    router.push('/successful-register')
  }

  const callBackOnSubmit = newDataAccount => {
    setAccount(newDataAccount)
  }

  useEffect(() => {
    requestCreateAccount(account, useCallbackCreateAccount)
  }, [account])

  const defaultClass = 'mainForm-cuenta'

  const inputs = [
    {
      registerData: {
        required: 'El nombre es requerido',
        minLength: {
          value: 2,
          message: 'El nombre debe tener al menos 2 caracteres',
        },
        maxLength: {
          value: 50,
          message: 'El nombre no puede tener más de 50 caracteres',
        },
      },
      name: 'firstname',
      size: 'large',
      color: 'black',
      placeholder: 'Nombre*',
      type: 'text',
    },
    {
      registerData: {
        required: 'El apellido es requerido',
        minLength: {
          value: 2,
          message: 'El apellido debe tener al menos 2 caracteres',
        },
        maxLength: {
          value: 50,
          message: 'El apellido no puede tener más de 50 caracteres',
        },
      },
      name: 'lastname',
      size: 'large',
      color: 'black',
      placeholder: 'Apellido*',
      type: 'text',
    },
    {
      registerData: {
        required: 'El campo DNI es obligatorio.',
      },
      name: 'dni',
      size: 'large',
      color: 'black',
      placeholder: 'DNI*',
      type: 'text',
    },
    {
      registerData: {
        required: 'Correo es requerido',
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: 'Correo no válido',
        },
      },
      name: 'email',
      size: 'large',
      color: 'black',
      placeholder: 'Correo electrónico*',
      type: 'email',
    },
    {
      registerData: {
        required: 'password es requerido',
        pattern: {
          message: 'Password no válido',
        },
      },
      name: 'password',
      size: 'large',
      color: 'black',
      placeholder: 'Contraseña*',
      type: 'password',
    },
    {
      registerData: {
        required: 'La confirmación de la contraseña es requerida',
      },
      name: 'confirmPassword',
      size: 'large',
      color: 'black',
      placeholder: 'Confirmar contraseña*',
      type: 'password',
    },
    {
      registerData: {
        required: 'El campo teléfono es obligatorio.',
      },
      name: 'phone',
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
        <Form
          callBackOnSubmit={callBackOnSubmit}
          inputs={inputs}
          name="createAccount"
          className={`${defaultClass}--createAccount`}
        />
      </div>
    </main>
  )
}

CreateAcount.displayName = 'CreateAcount'

export default CreateAcount
