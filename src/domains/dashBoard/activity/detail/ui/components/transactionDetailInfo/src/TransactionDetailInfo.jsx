import CardBlack from '@domains/cross/ui/components/cardBlack'
import '../styles/main.scss'
import Image from 'next/image'
import {classNames} from 'classnames'

const TransactionDetailInfo = () => {
  const defaultDetail = 'detail-transaction'

  return (
    <CardBlack size="Detail">
      <div className={`${defaultDetail}`}>
        <div className={`${defaultDetail}__statusDetail`}>
          <Image
            src="/images/check.svg"
            alt="Edit Icon"
            width={22}
            height={22}
          />
          <p>Aprobada</p>
        </div>
        <div className={`${defaultDetail}__transferSummary`}>
          <p>Transferencia de dinero</p>
          <p>$1.266,57</p>
        </div>
        <div className={`${defaultDetail}__recipientDetail`}>
          <p>Transferencia de dinero</p>
          <p>$1.266,57</p>
        </div>
        <div className={`${defaultDetail}__approvalDetail`}>
          <p>Transferencia de dinero</p>
          <p>$1.266,57</p>
        </div>
      </div>
    </CardBlack>
  )
}
export default TransactionDetailInfo
