import '../styles/main.scss'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import AccountStep from '@domains/dashBoard/paymentService/accountStep/stepNumber/ui/components/stepNumber/src/StepNumber'

const CWStepNumber = ({title}) => {
  return (
    <>
      <MobileHeader title="Pagar Servicios" />
      <CardBlack size="Account">
        <AccountStep />
      </CardBlack>
    </>
  )
}
export default CWStepNumber
