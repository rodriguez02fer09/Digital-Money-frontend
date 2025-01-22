import '../styles/main.scss'
import AproveCheck from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/aproveCheck/src/AproveCheck'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import InfoAprove from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/infoAprove/src/InfoAprove'
import Buttons from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/buttons/src/Buttons'

const CWAprove = () => {
  return (
    <>
      <AproveCheck />
      <CardBlack size="AproveInfo">
        <InfoAprove />
      </CardBlack>
      <Buttons />
    </>
  )
}
export default CWAprove
