'use client'
import '../styles/main.scss'
import {useState, useEffect} from 'react'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'

const CardSelect = ({selected}) => {
  const [selectedCard, setSelectedCar] = useState(null)

  const handleSelectCard = cardId => {
    setSelectedCar(cardId)
    console.log('tarjetaSelecionada', cardId)
    localStorage
  }

  return <HistoryCards selected={true} onSelect={handleSelectCard} />
}

export default CardSelect
