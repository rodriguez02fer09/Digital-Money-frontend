'use client'
import '../styles/main.scss'
import Image from 'next/image'

const AddCardsHeader = () => {
  const defaulAddsCardsHeader = 'adds-cards-header'

  return (
    <div className={defaulAddsCardsHeader}>
      <Image src="/images/arrowBlack.svg" width={14} height={22} alt="Flecha" />
      <p>Tarjetas</p>
    </div>
  )
}

export default AddCardsHeader
