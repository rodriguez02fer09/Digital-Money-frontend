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
    focus: '',
  })

  const handleInputChange = (name, value) => {
    setState(prev => ({...prev, [name]: value}))
  }

  const handleInputFocus = name => {
    setState(prev => ({...prev, focus: name}))
  }

  const callBackOnSubmit = data => {
    console.log('Datos enviados:', data)
  }

  return (
    <main className="form-container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus} // Asegura que `focused` reciba el estado actualizado
      />

      <Form
        callBackOnSubmit={callBackOnSubmit}
        inputs={inputs}
        name="add"
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
      />
    </main>
  )
}

export default AddCard
