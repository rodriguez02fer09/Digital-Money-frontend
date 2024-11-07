'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from 'app/app/cross/ui/components/cardBlack'
import CardActivity from '../../cross/ui/components/cardActivity'
import ContainAddCards from '../../cross/ui/components/containAddCards'
import ContainHistoryCards from '../../cross/ui/components/ContainHistoryCards'

const AddCards = () => {
  const defaultClass = 'addCards'
  return (
    <main className={defaultClass}>
      <div className={`${defaultClass}__addCards-header`}>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Tarjetas</p>
      </div>

      <div>
        <CardBlack size={'AddCard'}>
          <ContainAddCards />
        </CardBlack>
      </div>

      <div>
        <CardActivity size={'HistoryCard'}>
          {/* <ContainHistoryCards /> */}
        </CardActivity>
      </div>
    </main>
  )
}

export default AddCards
