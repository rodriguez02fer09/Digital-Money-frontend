import '../styles/desktop.scss'
import Image from 'next/image'
import ItemMoneyTransfer from '../../ItemMoneyTransfer/src/ItemMoneyTransfer'

const ContainMoneyTransfer = () => {
  return (
    <div className="ContainMoneyTransfer">
      <div>
        <p>
          Copia tu cvu o alias para ingresar o transferir dinero desde otra
          cuenta
        </p>
      </div>
      <div>
        <ItemMoneyTransfer />
      </div>
    </div>
  )
}

export default ContainMoneyTransfer
