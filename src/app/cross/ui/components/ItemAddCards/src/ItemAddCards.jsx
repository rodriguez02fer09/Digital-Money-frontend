import '../styles/desktop.scss'
import Image from 'next/image'

const ItemAddCards = () => {
  const defaultItemAddCards = 'ItemAddCards'
  return (
    <div className={`${defaultItemAddCards}`}>
      <Image src="/images/add.svg" width={34} height={34} alt="copy" />
      <div className={`${defaultItemAddCards}__containtex`}>
        <p>Nueva tarjeta</p>
      </div>
      <Image
        className={`${defaultItemAddCards}__arrow`}
        src="/images/arrow.svg"
        width={18}
        height={34}
        alt="copy"
      />
    </div>
  )
}

export default ItemAddCards
