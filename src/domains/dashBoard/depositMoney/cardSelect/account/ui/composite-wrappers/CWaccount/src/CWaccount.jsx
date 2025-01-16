import '../styles/main.scss'
import Account from '@domains/dashBoard/depositMoney/cardSelect/account/ui/components/account/src/Account'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
const CWAccount = () => {
  return (
    <>
      <CardBlack size="Account">
        <Account />
      </CardBlack>
    </>
  )
}
export default CWAccount
