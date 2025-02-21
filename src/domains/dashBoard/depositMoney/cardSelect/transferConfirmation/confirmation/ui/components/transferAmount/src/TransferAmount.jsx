import {useEffect} from 'react'
import '../styles/main.scss'
import Image from 'next/image'
import {useState} from 'react'

const TransferAmount = () => {
  const [amount, setAmount] = useState('')

  useEffect(() => {
    const storedAmount = localStorage.getItem('amountToDeposit') || '0'
    setAmount(storedAmount)
  }, [])

  const defaultTransferAmount = 'transfer-amount'
  return (
    <div className={`${defaultTransferAmount}`}>
      <div className={`${defaultTransferAmount}--p-img`}>
        <p>Vas a transferir</p>
        <Image src="/images/amount.svg" width={30} height={30} alt="Arrow" />
      </div>
      <div className={`${defaultTransferAmount}--amount`}>
        <p>$ {Number(amount).toLocaleString()}</p>
      </div>
    </div>
  )
}
export default TransferAmount
