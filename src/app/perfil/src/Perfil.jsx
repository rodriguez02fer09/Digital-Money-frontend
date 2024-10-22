'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from '../../../app/cross/ui/components/button'
import CardActivityMoney from '../../../app/cross/ui/components/cardActivityMoney'

const Perfil = () => {
  const defaultClass = 'perfil'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}__perfil-header`}>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Perfil</p>
      </div>
      <div>
        <CardActivityMoney size={'ActivityMoney'} />
      </div>

      <div className={`${defaultClass}__contain-buttons`}>
        <Button
          size={'dashboard-mobile'}
          label={'Pago de servicios'}
          color={'green'}
        />
      </div>

      <div className={`${defaultClass}__contain-card-black`}>
        <CardBlack size={'MoneyTransfer'} />
      </div>
    </main>
  )
}
export default Perfil
