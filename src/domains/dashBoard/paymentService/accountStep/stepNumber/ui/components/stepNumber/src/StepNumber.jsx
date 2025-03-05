'use client'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import Input from '@domains/cross/ui/components/input/index'
import {useState} from 'react'

const AccountStep = ({size, color}) => {
  const [inputValue, setInputValue] = useState('')

  const handleAccountStep = () => {
    if (!inputValue) return
    const storedService = JSON.parse(localStorage.getItem('selectedService'))
    window.location.href =
      '/dashBoard/paymentService/accountStep/stepSelectCard'
  }

  const defaultAccountStep = 'account-step'

  const handleInputChange = e => {
    const value = e.target.value
    localStorage.setItem('accountNumber', value)
    if (/^\d{0,11}(\.\d{0,11})?$/.test(value)) {
      setInputValue(value)
    }
  }

  return (
    <div className={`${defaultAccountStep}`}>
      <div className={`${defaultAccountStep}--text-input`}>
        <h1>Número de cuenta sin el primer 2</h1>
        <input
          type="text"
          placeholder="0"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>
          Son 11 números sin espacios, sin el “2” inicial. Agregá ceros adelante
          si tenés menos.{' '}
        </p>
        s
      </div>

      <div className={`${defaultAccountStep}--button-accountStep`}>
        <Button
          size="large"
          color={'green'}
          label="Continuar"
          onClick={handleAccountStep}
        />
      </div>
      <div className={`${defaultAccountStep}--button-mobile`}>
        <Button
          size="large"
          color={'green'}
          label="Continuar"
          onClick={handleAccountStep}
        />
      </div>
    </div>
  )
}
export default AccountStep
