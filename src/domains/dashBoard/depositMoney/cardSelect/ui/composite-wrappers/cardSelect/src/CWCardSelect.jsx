import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import Title from '@domains/dashBoard/depositMoney/cardSelect/ui/components/title/src/Title'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'
import ButtonAddCard from '@domains/dashBoard/depositMoney/cardSelect/ui/components/buttonAddCard/src/buttonAddCard'
const CWCardSelect = () => {
  return (
    <>
      <CardBlack size="SelectCard">
        <Title />
        <HistoryCards />
        <ButtonAddCard />
      </CardBlack>
    </>
  )
}
export default CWCardSelect
