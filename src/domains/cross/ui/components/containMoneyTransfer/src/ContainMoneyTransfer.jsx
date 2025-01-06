import '../styles/desktop.scss'
import Image from 'next/image'

import ItemMoneyTransfer from '@domains/cross/ui/components/ItemMoneyTransfer/src/ItemMoneyTransfer'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const ContainMoneyTransfer = () => {
  const {account} = useAccountStore()

  const {cvu, alias} = account ?? {}

  const defaultContainMoney = 'containMoneyTransfer'
  return (
    <div className={defaultContainMoney}>
      <div className={`${defaultContainMoney}__containDescription`}>
        <p>
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </p>
      </div>
      <div className={`${defaultContainMoney}__containItem`}>
        <ItemMoneyTransfer title={'CVU'} value={cvu} />
        <ItemMoneyTransfer title={'Alias'} value={alias} />
      </div>
    </div>
  )
}

export default ContainMoneyTransfer
