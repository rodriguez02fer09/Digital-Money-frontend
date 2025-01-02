// AddCards.js
'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from '../../cross/ui/components/cardBlack'
import MenuDesplegable from '../../cross/ui/components/menuDesplegable'
import CardActivity from '../../cross/ui/components/cardActivity'
import ContainAddCards from '../../cross/ui/components/containAddCards'
import ContainHistoryCards from '../../cross/ui/components/containHistoryCards'

const AddCards = () => {
  const defaultClass = 'add-cards'
  return (
    <main className={defaultClass}>
      <div className={`${defaultClass}__layout`}>
        <div className={`${defaultClass}__containMenuDesplegable`}>
          <MenuDesplegable />
        </div>
        <div className={`${defaultClass}__content`}></div>
      </div>
    </main>
  )
}

export default AddCards
