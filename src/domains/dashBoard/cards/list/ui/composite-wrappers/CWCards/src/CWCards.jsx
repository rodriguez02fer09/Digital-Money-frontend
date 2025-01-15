'use client'
import '../styles/main.scss'

import AddCard from '@domains/dashBoard/cards/list/ui/components/addCard/src/AddCard'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWCards = ({title}) => {
  return (
    <>
      <MobileHeader title="Tarjetas" />
      <AddCard />
      <HistoryCards />
    </>
  )
}

export default CWCards
