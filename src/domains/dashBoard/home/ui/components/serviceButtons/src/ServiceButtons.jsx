import '../index.scss'
import Button from '@domains/cross/ui/components/button'

const ServiceButtons = () => {
  const handlerDepositMoney = () => {
    window.location.href = '/dashBoard/depositMoney'
  }

  const handlerPayServices = () => {
    window.location.href = '/dashBoard/paymentService'
  }

  const defaultClass = 'service-buttons'
  return (
    <div className={defaultClass}>
      <Button
        size="button-activity"
        label="Cargar dinero"
        color="green"
        onClick={handlerDepositMoney}
      />
      <Button
        size="button-activity"
        label="Pago de servicios"
        color="green"
        onClick={handlerPayServices}
      />
    </div>
  )
}
export default ServiceButtons
