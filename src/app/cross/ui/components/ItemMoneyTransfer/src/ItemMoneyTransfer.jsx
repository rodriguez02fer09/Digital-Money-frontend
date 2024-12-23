import '../styles/desktop.scss'

import Image from 'next/image'

const ItemMoneyTransfer = ({cvTitle, descriptionCV}) => {
  const defaultItemMoney = 'ItemMoneyTransfer'
  return (
    <div className={`${defaultItemMoney}`}>
      <div className={`${defaultItemMoney}__contain-title`}>
        <p>{cvTitle}</p>
        <Image src="/images/carbon.svg" width={24} height={24} alt="copy" />
      </div>
      <div className={`${defaultItemMoney}__contain-description`}>
        <p className={`${defaultItemMoney}--description`}>{descriptionCV}</p>
      </div>
    </div>
  )
}

export default ItemMoneyTransfer
