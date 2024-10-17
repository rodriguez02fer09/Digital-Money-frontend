import '../styles/desktop.scss'

import Image from 'next/image'
import arrowBlack from '../../../../public/images/arrowBlack.svg'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from 'app/app/cross/ui/components/button'
import InputSearch from '../../../app/cross/ui/components/inputSearch'
import CardActivityMoney from 'app/app/cross/ui/components/cardActivityMoney'

const DashBoard = () => {
  const defaultClass = 'mainContain-dashBoard'

  return (
    <div className={`${defaultClass}`}>
      <arrowBlack />
      <p>Inicio</p>
      <CardBlack size={'AvailableAmountCard'} />
      <div>
        <Button size={'large'} label={'Ingresar dinero'} color={'green'} />
        <Button size={'large'} label={'Pago de servicios'} color={'green'} />
      </div>
      <div>
        <InputSearch size={'medium-prompt'} />
        <CardActivityMoney size={'ActivityMoney'} />
      </div>
    </div>
  )
}
export default DashBoard
