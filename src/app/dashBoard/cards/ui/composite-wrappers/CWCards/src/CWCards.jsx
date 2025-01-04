'use client'
import '../styles/main.scss'
import AddCardsHeader from '../../../components/addCardsHeader/src/AddCardsHeader'
import AddCard from '../../../components/addCard/src/AddCard'
import HistoryCards from '../../../components/historyCards/src/HistoryCards'

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
