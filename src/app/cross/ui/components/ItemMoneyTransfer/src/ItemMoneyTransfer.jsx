import '../styles/desktop.scss'

import Image from 'next/image'

const ItemMoneyTransfer = ({cvTitle, descriptionCV}) => {
  const defaultItemMoney = 'ItemMoneyTransfer'
  return (
    <div className={`${defaultItemMoney}`}>
      <p className={`${defaultItemMoney}__title`}>{cvTitle}</p>
      <p className={`${defaultItemMoney}__description`}>{descriptionCV}</p>
      <Image src="/images/carbon:copy.svg" width={14} height={22} alt="copy" />
    </div>
  )
}

export default ItemMoneyTransfer
