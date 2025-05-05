'use client'
import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import Title from '@domains/dashBoard/depositMoney/cardSelect/list/ui/components/title/src/Title'
import HistoryCards from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'
import ButtonAddCard from '@domains/dashBoard/depositMoney/cardSelect/list/ui/components/buttonAddCard/src/ButtonAddCard'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
import Button from '@domains/cross/ui/components/button/src/Button'

const CWCardSelect = ({title = 'Cargar dinero', onClick}) => {
  const handleContinue = () => {
    window.location.href = '/dashBoard/depositMoney/cardSelect/account'
  }

  const handleAddCard = () => {
    window.location.href = '/dashBoard/cards'
  }

  return (
    <>
      <MobileHeader title={title} />
      <main className="cw-card-select">
        <CardBlack size="SelectCard">
          <Title />
          <HistoryCards selected={true} />
          <ButtonAddCard onClick={handleAddCard} />
        </CardBlack>
        <div className="button-container">
          <Button
            size="medium"
            color="green"
            label="Continuar"
            onClick={handleContinue} // <- corregido aquí
          />
        </div>
      </main>
    </>
  )
}

export default CWCardSelect
