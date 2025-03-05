import '../styles/main.scss'
import AproveCheck from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/aproveCheck/src/AproveCheck'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import InfoPayService from '@domains/dashBoard/paymentService/accountStep/stepPayment/ui/components/infoPayService/src/InfoPayService'
import Buttons from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/buttons/src/Buttons'

const CWStepPayment = ({title}) => {
  return (
    <>
      <AproveCheck title="Ya realizaste el pago " />
      <CardBlack size="AproveInfo">
        <InfoPayService />
      </CardBlack>
      <Buttons />
    </>
  )
}
export default CWStepPayment
