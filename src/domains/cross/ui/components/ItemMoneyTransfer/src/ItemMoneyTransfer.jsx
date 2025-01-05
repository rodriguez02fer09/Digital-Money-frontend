import '../styles/desktop.scss'

import {toast} from 'react-toastify'
import Image from 'next/image'

const ItemMoneyTransfer = ({title, value}) => {
  const copyText = async text => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(`Copiaste ${title} ${text}`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      })
    } catch (err) {}
  }

  const defaultItemMoney = 'ItemMoneyTransfer'
  return (
    <div className={`${defaultItemMoney}`}>
      <div className={`${defaultItemMoney}__contain-title`}>
        <p>{title}</p>
        <Image
          src="/images/carbon.svg"
          width={24}
          height={24}
          alt="copy"
          onClick={() => copyText(value)}
          style={{cursor: 'pointer'}} // Estilo para indicar interactividad
        />
      </div>
      <div className={`${defaultItemMoney}__contain-description`}>
        <p className={`${defaultItemMoney}--description`}>{value}</p>
      </div>
    </div>
  )
}

export default ItemMoneyTransfer
