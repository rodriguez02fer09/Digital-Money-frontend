import '../styles/main.scss'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
import CardBlack from '@domains/cross/ui/components/cardBlack'
import AccountStep from '@domains/dashBoard/paymentService/accountStep/ui/components/account/src/AccountStep'

const CWAccountStep = ({title}) => {
  return (
    <>
      <MobileHeader title="Pagar Servicios" />
      <CardBlack size="Account">
        <AccountStep />
      </CardBlack>
    </>
  )
}
export default CWAccountStep
