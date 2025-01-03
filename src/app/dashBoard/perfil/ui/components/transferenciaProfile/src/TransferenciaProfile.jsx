'use client'
import '../styles/main.scss'
import CardBlack from '../../../../../../cross/ui/components/cardBlack/src/CardBlack'
import ContainMoneyTransfer from '../../../../../../cross/ui/components/ContainMoneyTransfer/src/ContainMoneyTransfer'

const defaultTransferencia = 'transferencia-profile'

const TransferenciaProfile = () => {
  return (
    <div className={defaultTransferencia}>
      <CardBlack size="MoneyTransfer">
        <ContainMoneyTransfer />
      </CardBlack>
    </div>
  )
}

export default TransferenciaProfile
