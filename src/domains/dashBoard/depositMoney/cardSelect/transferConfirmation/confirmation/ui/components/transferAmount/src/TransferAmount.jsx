import '../styles/main.scss'
import Image from 'next/image'

const TransferAmount = () => {
  const defaultTransferAmount = 'transfer-amount'
  return (
    <div className={`${defaultTransferAmount}`}>
      <div className={`${defaultTransferAmount}--p-img`}>
        <p>Vas a transferir</p>
        <Image src="/images/amount.svg" width={30} height={30} alt="Arrow" />
      </div>
      <div className={`${defaultTransferAmount}--amount`}>
        <p>$ 900</p>
      </div>
    </div>
  )
}
export default TransferAmount
