'use client'
import 'react-credit-cards-2/dist/lib/styles.scss'

import {useState} from 'react'

import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'
import Form from '@domains/dashBoard/cards/add/ui/composite-wrapers/addCardform/src/AddCardForm'
import Cards from 'react-credit-cards-2'
import {inputs} from '@domains/dashBoard/cards/add/data/forms/default'

const AddCard = () => {
  const {register, handleSubmit, formState} = useForm()

  const useCallbackCreateAccount = result => {}

  const callBackOnSubmit = newDataCard => {
    debugger
    setCard({
      ...newDataCard,
    })
  }

  const defaultClass = 'form-card'

  const [card, setCard] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: true,
  })

  const handleInputChange = evt => {
    const {name, value} = evt.target
    setCard(prev => ({...prev, [name]: value}))
  }

  const callbackInputFocus = evt => {
    setCard(prev => ({...prev, focus: evt.target.name}))
  }

  return (
    <main className={`${defaultClass}`}>
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
      />
      <Form
        callBackOnSubmit={callBackOnSubmit}
        callbackInputFocus={callbackInputFocus}
        inputs={inputs}
        name="add"
        className={`${defaultClass}`}
      />
    </main>
  )
}

AddCard.displayName = 'AddCard'

export default AddCard
