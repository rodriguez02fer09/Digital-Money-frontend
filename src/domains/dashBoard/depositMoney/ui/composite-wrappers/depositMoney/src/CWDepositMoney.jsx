import '../styles/main.scss'
import BankTransaction from '@domains/dashBoard/depositMoney/ui/components/bankTransaction/src/BankTransaction'
import SelectCard from '@domains/dashBoard/depositMoney/ui/components/selectCard/src/SelectCard'

const DepositMoney = () => {
  return (
    <>
      <BankTransaction />
      <SelectCard />
    </>
  )
}

export default DepositMoney
