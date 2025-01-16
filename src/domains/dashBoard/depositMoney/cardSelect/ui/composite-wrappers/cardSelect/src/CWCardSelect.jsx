import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import Title from '@domains/dashBoard/depositMoney/cardSelect/ui/components/title/src/Title'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'
import ButtonAddCard from '@domains/dashBoard/depositMoney/cardSelect/ui/components/buttonAddCard/src/buttonAddCard'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
import Button from '@domains/cross/ui/components/button/src/Button'

const CWCardSelect = ({title}) => {
  return (
    <>
      <MobileHeader title="Cargar dinero" />
      <CardBlack size="SelectCard">
        <Title />
        <HistoryCards />
        <ButtonAddCard />
      </CardBlack>
      <div className="button">
        <Button size="medium" color="green" label="Continuar" />
      </div>
    </>
  )
}
export default CWCardSelect
