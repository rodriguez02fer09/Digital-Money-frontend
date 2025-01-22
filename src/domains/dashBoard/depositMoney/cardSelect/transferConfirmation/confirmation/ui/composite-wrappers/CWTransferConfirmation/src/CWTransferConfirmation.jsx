import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
import Title from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/confirmation/ui/components/title/src/Title'
import TransferAmount from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/confirmation/ui/components/transferAmount/src/TransferAmount'
import TransferDestination from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/confirmation/ui/components/transferDestination/src/TransferDestination'
import Button from '@domains/cross/ui/components/button/src/Button'

const TransferConfirmation = ({title}) => {
  return (
    <>
      <MobileHeader title="Cargar dinero" />
      <CardBlack size="TransferConfirmation ">
        <Title />
        <TransferAmount />
        <TransferDestination />
      </CardBlack>
      <div className="button-mobile">
        <Button size="large" color="green" label="Continuar" />
      </div>
    </>
  )
}

export default TransferConfirmation
