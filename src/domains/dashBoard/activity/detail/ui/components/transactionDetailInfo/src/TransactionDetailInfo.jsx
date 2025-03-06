'use client'
import '../styles/main.scss'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import CardBlack from '@domains/cross/ui/components/cardBlack'

const formatDate = isoString => {
  if (!isoString) return 'Fecha desconocida'

  const date = new Date(isoString)
  const options = {day: '2-digit', month: 'long', year: 'numeric'}
  const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date)

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${formattedDate} a ${hours}:${minutes} hs.`
}

const TransactionDetailInfo = () => {
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    const storedActivity = localStorage.getItem('activity')
    if (storedActivity) {
      try {
        const parsedActivity = JSON.parse(storedActivity)
        setActivity(parsedActivity)
      } catch (error) {
        console.error('Error al parsear activity:', error)
      }
    }
  }, [])

  if (!activity) {
    return <p>Cargando información...</p>
  }

  return (
    <CardBlack size="Detail">
      <div className="detail-transaction">
        <div className="detail-transaction__statusDetail">
          <div className="detail-transaction__statusDetail--statusInfo">
            <Image
              src="/images/check.svg"
              alt="Ícono de estado"
              width={22}
              height={22}
            />
            <p className="status-title">Aprobada</p>
          </div>
          <p className="status-date">Creada el {formatDate(activity?.dated)}</p>
        </div>

        <div className="detail-transaction__transferSummary">
          <p className="summary-title">Transferencia de dinero</p>
          <p className="summary-amount">${activity?.amount ?? '0.00'}</p>
        </div>

        <div className="detail-transaction__recipientDetail">
          <p className="recipient-title">Le transferiste a </p>
          <p className="recipient-amount">
            {activity?.description ?? 'Desconocido'}
          </p>
        </div>

        <div className="detail-transaction__approvalDetail">
          <p className="approval-title">Número de operación</p>
          <p className="approval-amount">{activity?.id}</p>
        </div>
      </div>
    </CardBlack>
  )
}

export default TransactionDetailInfo
