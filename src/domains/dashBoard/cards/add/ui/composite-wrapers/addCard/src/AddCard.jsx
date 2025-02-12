'use client'
import '../styles/main.scss'
import 'react-credit-cards-2/dist/lib/styles.scss'

import {useState} from 'react'
import {useForm} from 'react-hook-form'
import Cards from 'react-credit-cards-2'

import Form from '@domains/dashBoard/cards/add/ui/composite-wrapers/addCardform/src/AddCardForm'
import {inputs} from '@domains/dashBoard/cards/add/data/forms/default'

const AddCard = () => {
  const {register, handleSubmit, formState} = useForm()

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focused: '',
  })

  const callBackOnSubmit = data => {
    console.log('Datos enviados:', data)
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
