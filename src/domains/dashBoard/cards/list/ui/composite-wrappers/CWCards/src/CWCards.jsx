'use client'
import '../styles/main.scss'

import {useState} from 'react'

import AddCard from '@domains/dashBoard/cards/list/ui/components/addCard/src/AddCard'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWCards = ({title}) => {
  const [addCards, setAddCards] = useState([])

  const handleCards = newCards => {
    setAddCards(newCards)
  }

  return (
    <>
      <MobileHeader title="Tarjetas" />
      <AddCard addCards={addCards} setAddCards={setAddCards} />
      <HistoryCards addCards={addCards} handleCards={handleCards} />
    </>
  )
}

export default CWCards
