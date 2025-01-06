'use client'
import '../styles/main.scss'
import AddCardsHeader from '@domains/dashBoard/cards/list/ui/components/addCardsHeader/src/AddCardsHeader'
import AddCard from '@domains/dashBoard/cards/list/ui/components/addCard/src/AddCard'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'

const CWCards = () => {
  return (
    <>
      <AddCardsHeader />
      <AddCard />
      <HistoryCards />
    </>
  )
}

export default CWCards
