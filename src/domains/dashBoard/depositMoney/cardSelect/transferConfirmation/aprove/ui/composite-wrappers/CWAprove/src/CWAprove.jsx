import '../styles/main.scss'
import AproveCheck from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/aproveCheck/src/AproveCheck'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import InfoAprove from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/infoAprove/src/InfoAprove'
import Buttons from '@domains/dashBoard/depositMoney/cardSelect/transferConfirmation/aprove/ui/components/buttons/src/Buttons'

const CWAprove = ({title}) => {
  return (
    <>
      <AproveCheck title="Ya cargamos el dinero en tu cuenta" />
      <CardBlack size="AproveInfo">
        <InfoAprove />
      </CardBlack>
      <Buttons />
    </>
  )
}
export default CWAprove
