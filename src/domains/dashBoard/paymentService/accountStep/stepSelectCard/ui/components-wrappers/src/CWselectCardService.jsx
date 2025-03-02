import '../styles/main.scss'
import PayService from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/payService/src/PayService'
import CardSelect from '@domains/dashBoard/cards/list/ui/components/historyCards/src/HistoryCards'

const CWSelectCardService = ({selected}) => {
  return (
    <>
      <PayService />
      <CardSelect selected={selected} />
    </>
  )
}

export default CWSelectCardService
