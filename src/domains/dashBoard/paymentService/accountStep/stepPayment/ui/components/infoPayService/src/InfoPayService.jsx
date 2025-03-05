'use client'
import {useEffect, useState} from 'react'
import '../styles/main.scss'

const InfoPayService = () => {
  const [payData, setPayData] = useState({
    amount: 0,
    dated: new Date().toISOString(),
    description: '',
  })
  const [cardNumber, setCardNumber] = useState('')

  useEffect(() => {
    // Recupera payData desde localStorage
    const storedPayData = localStorage.getItem('payData')
    if (storedPayData) {
      setPayData(JSON.parse(storedPayData))
    } else {
      console.log('No se encontró payData en localStorage')
    }

    // Recupera el id de la tarjeta (selectedCard) desde localStorage
    const storedCardId = JSON.parse(localStorage.getItem('selectedCard'))
    if (storedCardId) {
      // Recupera el listado de tarjetas (cardsList) desde localStorage
      const storedCards = localStorage.getItem('cardsList')
      if (storedCards) {
        const cards = JSON.parse(storedCards)
        // Convertir ambos valores a string para evitar problemas de tipo
        const cardFound = cards.find(
          card => String(card.id) === String(storedCardId),
        )
        if (cardFound && cardFound.number_id) {
          setCardNumber(cardFound.number_id)
        } else {
          console.log('No se encontró la tarjeta o no tiene number_id')
        }
      } else {
        console.log('No se encontró el listado de tarjetas en localStorage')
      }
    } else {
      console.log('No se encontró selectedCard en localStorage')
    }
  }, [])

  const {amount, dated, description} = payData

  return (
    <div className="info-pay-service">
      <div className="info-pay-service__date-amount">
        <p className="date">
          {new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(dated))}
        </p>
        <p className="amount">{amount}</p>
      </div>
      <div className="info-pay-service__account">
        <p className="account-label">Descripción</p>
        <p className="account-service">{description}</p>
      </div>
      <div className="info-pay-service__number-account">
        <p className="card">Tarjeta</p>
        <p className="name-card">
          {cardNumber ? cardNumber : 'Número de tarjeta no disponible'}
        </p>
      </div>
    </div>
  )
}

export default InfoPayService
