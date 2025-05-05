'use client'
import '../styles/desktop.scss'
import Image from 'next/image'

const ItemAddCards = ({disabled}) => {
  const handleCardAdd = () => {
    if (disabled) return
    window.location.href = '/dashBoard/cards/add'
  }

  const defaultItemAddCards = 'ItemAddCards'

  return (
    <div
      className={`${defaultItemAddCards} ${
        disabled ? `${defaultItemAddCards}--disabled` : ''
      }`}
      onClick={handleCardAdd}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Image
        className={`${defaultItemAddCards}__icon`}
        src="/images/add.svg"
        width={34}
        height={34}
        alt="add"
      />
      <div className={`${defaultItemAddCards}__tex`}>
        <p>{disabled ? 'Límite de tarjetas alcanzado' : 'Nueva tarjeta'}</p>
      </div>
      <Image
        className={`${defaultItemAddCards}__arrow`}
        src="/images/arrow.svg"
        width={18}
        height={34}
        alt="arrow"
      />
    </div>
  )
}

export default ItemAddCards
