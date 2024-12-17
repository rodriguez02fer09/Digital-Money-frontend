'use client'

import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from '../../../app/cross/ui/components/cardBlack'
import Button from '../../../app/cross/ui/components/button'
import CardActivity from '../../../app/cross/ui/components/cardActivity'
import ContainFormDatePerfil from '../../../app/cross/ui/composite-wrappers/containFormDatePerfil/src/ContainFormDatePerfil'
import ContainMoneyTransfer from '../../../app/cross/ui/components/ContainMoneyTransfer/src/ContainMoneyTransfer'
import MenuDesplegable from '../../cross/ui/components/menuDesplegable'

const Perfil = () => {
  const defaultClass = 'perfil'

  return (
    <main className={defaultClass}>
      <div className={`${defaultClass}__layout`}>
     <MenuDesplegable /> 

        <div className={`${defaultClass}__content`}>
          <div className={`${defaultClass}__contain-header`}>
            <Image
              src="/images/arrowBlack.svg"
              width={14}
              height={22}
              alt="Arrow"
            />
            <p>Perfil</p>
          </div>

          <div className={`${defaultClass}__contain-Profile`}>
            <CardActivity size="ProfileData">
              <ContainFormDatePerfil />
            </CardActivity>
          </div>

          <div className={`${defaultClass}__contain-buttons`}>
            <Button
              size="button-arrow"
              label="Gestioná los medios de pago"
              color="green"
            />
          </div>

          <div className={`${defaultClass}__contain-cardBlack`}>
            <CardBlack size="MoneyTransfer">
              <ContainMoneyTransfer />
            </CardBlack>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Perfil
