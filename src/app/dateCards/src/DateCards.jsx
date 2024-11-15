// AddCards.js
'use client'
import '../styles/desktop.scss'
import InputSearch from '../../cross/ui/components/inputSearch'
import Image from 'next/image'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from '../../../app/cross/ui/components/button'
import CreditCard from '../../../app/cross/ui/components/creditCard'
import ContainCards from '../../../app/cross/ui/components/containCards'

const DateCards = () => {
  const defaultClass = 'date-cards'

  return (
    <main className={defaultClass}>
      <div className={`${defaultClass}__date-header`}>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Tarjetas</p>
      </div>

      <div className={`${defaultClass}__containDateFormCard`}>
        <div className={`${defaultClass}__dateCard`}>
          <CreditCard size="cardEmpty" color="grey">
            <ContainCards />
          </CreditCard>
        </div>
        <div className={`${defaultClass}__dateFormCard`}>
          <InputSearch
            type="text"
            color="blue"
            placeholder="Numero de tarjeta*"
          />
          <InputSearch
            type="text"
            size="large"
            color="blue"
            placeholder="Nombre y apellido*"
          />
          <InputSearch
            type="text"
            size="large"
            color="blue"
            placeholder="Fecha de vencimiento*"
          />
          <InputSearch
            type="text"
            size="large"
            color="blue"
            placeholder="Código de seguridad*"
          />
          <div className={`${defaultClass}__contain-button`}>
            <Button size="large" label="Continuar" color="green" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default DateCards
