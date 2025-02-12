'use client'
import '../styles/main.scss'
import 'react-credit-cards-2/dist/lib/styles.scss'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import Cards from 'react-credit-cards-2'
import {useRouter} from 'next/navigation'
import {toast} from 'react-toastify'
import request from '@domains/cross/core/uses-cases/request'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import Form from '@domains/dashBoard/cards/add/ui/composite-wrapers/addCardform/src/AddCardForm'
import {inputs} from '@domains/dashBoard/cards/add/data/forms/default'

const AddCard = () => {
  const {account} = useAccount()
  const {id: account_id} = account ?? {}
  const {register, handleSubmit, formState} = useForm()

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focused: '',
  })

  const callBackAddCard = newCard => {
    console.log('Tarjeta agregada:', newCard)

    toast.success('✅ Tarjeta agregada con éxito!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    })
    setInterval(() => {
      window.location.href = '/dashBoard/cards'
    }, 3000)
  }

  const callBackOnSubmit = data => {
    if (account !== null) {
      request(
        {
          path: `accounts/${account_id}/cards`,
          method: 'POST',
          addHeaders: {
            Authorization: getDataLocalStore('token'),
          },
          data: {
            ...data,
            expiration_date: '09/2032',
            first_last_name: data.name,
          },
        },
        callBackAddCard,
      )
      console.log('Datos enviados:', data)
    }
  }

  const callBackOnChange = (data, control) => {
    console.log(control)
    setState(state => ({
      ...state,
      ...data,
      focused: control,
    }))
  }

  return (
    <main className="form-container">
      <Cards {...state} />

      <Form
        callBackOnSubmit={callBackOnSubmit}
        callBackOnChange={callBackOnChange}
        inputs={inputs}
        name="add"
      />
    </main>
  )
}

export default AddCard
