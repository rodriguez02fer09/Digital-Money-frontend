import '../styles/main.scss'
import Image from 'next/image'
import CardBlack from '@domains/cross/ui/components/cardBlack'

const SelectCard = () => {
  const defaultSelectCard = 'select-card'

  return (
    <CardBlack size="DepositMoney">
      <div className={`${defaultSelectCard}`}>
        <div className={`${defaultSelectCard}--title-image`}>
          <Image
            src="/images/selectCard.svg"
            alt="Ícono de estado"
            width={22}
            height={22}
          />
          <p>Seleccionar tarjeta</p>
        </div>
        <div className={`${defaultSelectCard}--image-arrow`}>
          {' '}
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

export default SelectCard
