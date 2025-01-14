import CardBlack from '@domains/cross/ui/components/cardBlack'
import '../styles/main.scss'
import Image from 'next/image'

const TransactionDetailInfo = () => {
  const defaultDetail = 'detail-transaction'

  return (
    <CardBlack size="Detail">
      <div className={defaultDetail}>
        <div className={`${defaultDetail}__statusDetail`}>
          <div className={`${defaultDetail}__statusDetail--statusInfo`}>
            <Image
              src="/images/check.svg"
              alt="Ícono de estado"
              width={22}
              height={22}
            />
            <p className="status-title">Aprobada</p>
          </div>
          <p className="status-date">
            Creada el 17 de agosto 2022 a 16:34 hs.{' '}
          </p>
        </div>

        <div className={`${defaultDetail}__transferSummary`}>
          <p className="summary-title">Transferencia de dinero</p>
          <p className="summary-amount">$1.266,57</p>
        </div>

        <div className={`${defaultDetail}__recipientDetail`}>
          <p className="recipient-title">Le transferiste a </p>
          <p className="recipient-amount">Rodrigo Vaccaro</p>
        </div>

        <div className={`${defaultDetail}__approvalDetail`}>
          <p className="approval-title">Número de operación</p>
          <p className="approval-amount">27903047281</p>
        </div>
      </div>
    </CardBlack>
  )
}

export default TransactionDetailInfo
