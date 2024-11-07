import '../styles/desktop.scss'

import Image from 'next/image'

const ItemMoneyTransfer = ({cvTitle, descriptionCV}) => {
  return (
    <div className="ItemMoneyTransfer">
      <p>{cvTitle}</p>
      <p>{descriptionCV}</p>
      <Image src="/images/carbon:copy.svg" width={14} height={22} alt="copy" />
    </div>
  )
}

export default ItemMoneyTransfer
