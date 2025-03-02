import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'

const PayService = ({service}) => {
  const {id, name = 'Servicio sin nombre'} = service || {}

  const defaultPayService = 'pay-service'

  return (
    <CardBlack>
      <div className={defaultPayService}>
        <div className={`${defaultPayService}--detailService`}>
          <p>{name}</p>
          <p>Ver detalles del pago</p>
        </div>
        <div className={`${defaultPayService}--detailAmount`}>
          <p>Total a pagar</p>
          <p>Ver detalles del pago</p>
        </div>
      </div>
    </CardBlack>
  )
}

export default PayService
