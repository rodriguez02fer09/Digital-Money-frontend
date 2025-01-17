import '../styles/main.scss'
import Account from '@domains/dashBoard/depositMoney/cardSelect/account/ui/components/account/src/Account'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'
const CWAccount = ({title}) => {
  return (
    <>
      <MobileHeader title="Cargar dinero" />
      <CardBlack size="Account">
        <Account />
      </CardBlack>
    </>
  )
}
export default CWAccount
