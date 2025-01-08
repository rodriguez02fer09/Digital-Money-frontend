'use client'
import '../styles/desktop.scss'
import Image from 'next/image'

const ItemAddCards = () => {
  const handleCardAdd = () => {
    window.location.href = '/dashBoard/cards/add'
  }

  const defaultItemAddCards = 'ItemAddCards'
  return (
    <div className={`${defaultItemAddCards}`} onClick={handleCardAdd}>
      <Image
        className={`${defaultItemAddCards}__icon`}
        src="/images/add.svg"
        width={34}
        height={34}
        alt="copy"
      />
      <div className={`${defaultItemAddCards}__tex`}>
        <p>Nueva tarjeta</p>
      </div>

      <Image
        className={`${defaultItemAddCards}__arrow`}
        src="/images/arrow.svg"
        width={18}
        height={34}
        alt="copy"
      />
    </div>
  )
}

export default ItemAddCards
