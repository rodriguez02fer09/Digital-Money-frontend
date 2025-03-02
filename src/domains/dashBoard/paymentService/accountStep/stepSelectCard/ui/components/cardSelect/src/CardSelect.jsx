import '../styles/main.scss'
import PayService from '@domains/dashBoard/paymentService/accountStep/stepSelectCard/ui/components/payService/src/PayService'
import CardSelect from './CardSelect'

const CWSelectCardService = ({isSelectionMode}) => {
  return (
    <>
      <PayService />
      <CardSelect selected={isSelectionMode} />
    </>
  )
}

export default CWSelectCardService
