'use client'
import '../styles/main.scss'
import Button from '@domains/cross/ui/components/button/src/Button'
import Input from '@domains/cross/ui/components/input/index'
import {useState} from 'react'

const Account = ({size, color}) => {
  const [inputValue, setInputValue] = useState('')

  const handleAccount = () => {
    if (!inputValue) return
    localStorage.getItem('selectedCard', JSON.stringify(card))
    window.location.href =
      '/dashBoard/depositMoney/cardSelect/transferConfirmation/confirmation'
  }

  const defaultAccount = 'account'

  const handleInputChange = e => {
    const value = e.target.value

    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value)
    }
  }
  const isButtonDisabled = !inputValue

  return (
    <div className={`${defaultAccount}`}>
      <div className={`${defaultAccount}--text-input`}>
        <h1>¿Cuánto querés ingresar a la cuenta?</h1>
        <input
          type="text"
          placeholder="$0"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={`${defaultAccount}--button-account`}>
        <Button
          size="large"
          color={isButtonDisabled ? 'gray' : 'green'} // Cambia el color según si está deshabilitado
          label="Continuar"
          onClick={handleAccount}
          disabled={isButtonDisabled}
        />
      </div>
      <div className={`${defaultAccount}--button-mobile`}>
        <Button
          size="large"
          color={isButtonDisabled ? 'gray' : 'green'}
          label="Continuar"
          onClick={handleAccount}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  )
}
export default Account
