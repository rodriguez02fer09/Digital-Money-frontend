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
        <ItemMoneyTransfer
          cvTitle="CVU"
          descriptionCV="0000002100075320000000"
        />
        <ItemMoneyTransfer cvTitle="Alias" descriptionCV="estealiasnoexiste" />
      </div>
    </div>
  )
}

export default ContainMoneyTransfer
