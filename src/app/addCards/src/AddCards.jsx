'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import CardBlack from 'app/app/cross/ui/components/cardBlack'
import CardActivityMoney from '../../../app/cross/ui/components/cardActivityMoney'

const AddCards = () => {
  return (
    <main>
      <div>
        <Image
          src="/images/arrowBlack.svg"
          width={14}
          height={22}
          alt="Arrow"
        />
        <p>Tarjetas</p>
      </div>

      <div>
        <CardBlack size={'AddCard'} />
      </div>

      <div>
        <CardActivityMoney size={'HistoryCard'} />
      </div>
    </main>
  )
}

export default AddCards
