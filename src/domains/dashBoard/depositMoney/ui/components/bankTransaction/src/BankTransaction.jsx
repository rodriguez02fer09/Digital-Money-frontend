import '../styles/main.scss'
import Image from 'next/image'
import CardBlack from '@domains/cross/ui/components/cardBlack'

const BankTransaction = () => {
  const defaultBankTransaction = 'bank-transaction'

  return (
    <CardBlack size="DepositMoney">
      <div className={`${defaultBankTransaction}`}>
        <div className={`${defaultBankTransaction}--title-image`}>
          <Image
            src="/images/user.svg"
            alt="Ícono de estado"
            width={22}
            height={22}
          />
          <p>Transferencia bancaria</p>
        </div>
        <div className={`${defaultBankTransaction}--image-arrow`}>
          <Image
            src="/images/arrow.svg"
            alt="Ícono de estado"
            width={22}
            height={22}
          />
        </div>
      </div>
    </CardBlack>
  )
}

export default BankTransaction
