import '../styles/main.scss'
import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ItemServices from '@domains/dashBoard/paymentService/list/ui/components/itemServices/src/ItemServices'

const Historyservices = () => {
  return (
    <CardActivity size="Services">
      <ItemServices />
    </CardActivity>
  )
}

export default Historyservices
