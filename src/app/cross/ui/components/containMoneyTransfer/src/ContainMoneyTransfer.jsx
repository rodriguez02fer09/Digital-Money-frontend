import '../styles/desktop.scss'
import Image from 'next/image'
import ItemMoneyTransfer from '../../ItemMoneyTransfer/src/ItemMoneyTransfer'

const ContainMoneyTransfer = () => {
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
        <ItemMoneyTransfer />
        <ItemMoneyTransfer />
      </div>
    </div>
  )
}

export default ContainMoneyTransfer
