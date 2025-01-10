import {useEffect} from 'react'
import '../styles/desktop.scss'
import {useAcountStore} from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import ItemMoneyTransfer from '@domains/cross/ui/components/ItemMoneyTransfer/src/ItemMoneyTransfer'

const ContainMoneyTransfer = () => {
  const {account} = useAcountStore()

  useEffect(() => {
    console.log(account)
  }, [account])

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
