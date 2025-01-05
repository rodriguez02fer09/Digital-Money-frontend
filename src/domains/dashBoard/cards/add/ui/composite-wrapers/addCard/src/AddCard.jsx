'use client'
import 'react-credit-cards-2/dist/lib/styles.scss'

import {useState} from 'react'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import Form from '../../addCardform/src/AddCardForm'
import Cards from 'react-credit-cards-2'
import {inputs} from '../../../../data/forms/default'

const AddCard = () => {
  const {register, handleSubmit, formState} = useForm()

  const useCallbackCreateAccount = result => {}

  const callBackOnSubmit = newDataAccount => {}

  const defaultClass = 'mainForm-cuenta'

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  })

  const handleInputChange = evt => {
    const {name, value} = evt.target

    setState(prev => ({...prev, [name]: value}))
  }

  const handleInputFocus = evt => {
    setState(prev => ({...prev, focus: evt.target.name}))
  }

  return (
    <main className={`${defaultClass}`}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

      <Form
        callBackOnSubmit={callBackOnSubmit}
        inputs={inputs}
        name="createAccount"
        className={`${defaultClass}--createAccount`}
      />
    </main>
  )
}

AddCard.displayName = 'AddCard'

export default AddCard
