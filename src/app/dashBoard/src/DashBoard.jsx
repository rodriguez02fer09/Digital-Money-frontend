'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from '../../../app/cross/ui/components/button'
import InputSearch from '../../../app/cross/ui/components/inputSearch'
import CardActivity from '../../cross/ui/components/cardActivity'
import AvailableMoneyCard from '../../../app/cross/ui/components/availableMoneyCard'
import CardList from '../../cross/ui/components/cardList'
import MenuDesplegable from '../../cross/ui/components/menuDesplegable'

const DashBoard = () => {
  const defaultClass = 'dashboard'

  return (
    <main className={`${defaultClass}`}>
      <MenuDesplegable />
      <div className={`${defaultClass}__contain-header`}>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Inicio</p>
      </div>
      <div className={`${defaultClass}__contain-card-black`}>
        <CardBlack size={'AvailableAmountCard'}>
          <AvailableMoneyCard />
        </CardBlack>
      </div>
      <div className={`${defaultClass}__contain-buttons`}>
        <Button
          size={'dashboard-mobile'}
          label={'Ingresar dinero'}
          color={'green'}
        />
        <Button
          size={'dashboard-mobile'}
          label={'Pago de servicios'}
          color={'green'}
        />
      </div>
      <div className={`${defaultClass}__contain-input`}>
        <InputSearch
          size={'medium-prompt'}
          placeholder={'Busca tu actividad'}
        />
      </div>
      <div className={`${defaultClass}__contain-activity`}>
        <CardActivity size={'Activity'}>
          <CardList />
        </CardActivity>
      </div>
    </main>
  )
}

export default DashBoard
