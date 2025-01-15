import '../styles/main.scss'
import BankTransaction from '@domains/dashBoard/depositMoney/ui/components/bankTransaction/src/BankTransaction'
import SelectCard from '@domains/dashBoard/depositMoney/ui/components/selectCard/src/SelectCard'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const DepositMoney = ({title}) => {
  return (
    <>
      <MobileHeader title="Cargar dinero" />
      <BankTransaction />
      <SelectCard />
    </>
  )
}

export default DepositMoney
