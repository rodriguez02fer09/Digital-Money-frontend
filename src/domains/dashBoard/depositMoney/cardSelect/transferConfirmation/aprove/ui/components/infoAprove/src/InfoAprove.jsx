'use client' // Asegura que se ejecuta solo en el cliente
import {useState, useEffect} from 'react'
import '../styles/main.scss'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
const InfoAprove = () => {
  const defaultAprove = 'aprove'

  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', // "lunes"
    day: '2-digit', // "21"
    month: 'long', // "febrero"
    year: 'numeric', // "2025"
  })

  const {user: perfil, updateUser, account} = useAccount()
  const {id: account_id, cvu} = account ?? {}

  const [amount, setAmount] = useState('0')

  useEffect(() => {
    // Solo se ejecuta en el navegador
    const storedAmount =
      JSON.parse(localStorage.getItem('amountToDeposit')) ?? '0'
    const storedOrigin =
      JSON.parse(localStorage.getItem('cvu')) ?? 'No disponible'

    setAmount(storedAmount)
  }, [])

  return (
    <div className={`${defaultAprove}`}>
      <div className="title">
        <p>Revisá que está todo bien</p>
      </div>

      <div className={`${defaultAprove}__date-amount`}>
        <p className="date">{currentDate}</p>
        <p className="amount">${amount}</p>
      </div>

      <div className={`${defaultAprove}__account`}>
        <p className="account-label">Para</p>
        <p className="account-type">Cuenta propia</p>
      </div>

      <div className={`${defaultAprove}__number-account`}>
        <p className="bank">Brubank</p>
        <p className="cvu">{cvu}</p>
      </div>
    </div>
  )
}

export default InfoAprove
