'use client'
import '../styles/desktop.scss'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import Form from '../../../../../../cross/ui/composite-wrappers/createAccountForm/src/createAccountForm'
import {createAccountForm} from '../../../../data/forms/default'
import {requestCreateAccount} from '../../../../core/uses-cases/request-create-account'
import {useAcountStore} from '../../../../core/hoocks/useAcountStore'
import {useEffect} from 'react'

const CreateAcount = () => {
  const {register, handleSubmit, formState} = useForm()
  const router = useRouter()

  const {account, setAccount} = useAcountStore()

  const useCallbackCreateAccount = result => {
    console.log('Usuario registrado con éxito:', result)
    router.push('/successful-register') // Redirigir después de la creación exitosa
  }

  const callBackOnSubmit = newDataAccount => {
    setAccount({
      ...newDataAccount,
      dni: parseInt(newDataAccount.dni),
    })
    requestCreateAccount(account, useCallbackCreateAccount)
  }

  const defaultClass = 'mainForm-cuenta'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}--container`}>
        <p className={`${defaultClass}__InfoTitle`}>Crear cuenta</p>
        <Form
          callBackOnSubmit={callBackOnSubmit}
          inputs={createAccountForm}
          name="createAccount"
          className={`${defaultClass}--createAccount`}
        />
      </div>
    </main>
  )
}

CreateAcount.displayName = 'CreateAcount'

export default CreateAcount
