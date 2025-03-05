'use client'
import '../styles/main.scss'

import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'

const PayService = ({serviceData = {}}) => {
  const {name, invoice_value, date} = serviceData

  const defaultPayService = 'pay-service'

  return (
    <CardBlack>
      <div className={defaultPayService}>
        <div className={`${defaultPayService}--detailService`}>
          <p>{name || 'Servicio sin nombre'}</p>
          <p>Fecha: {date || 'Sin fecha'}</p>
          <p>Ver detalles del pago</p>
        </div>
        <div className={`${defaultPayService}--detailAmount`}>
          <p>Total a pagar</p>
          <p> $ {invoice_value || 'No disponible'}</p>
        </div>
      </div>
    </CardBlack>
  )
}

export default PayService
