import '../styles/desktop.scss'
import Image from 'next/image'

const NameCard = ({NameCard}) => {
  const defaultNameCard = 'name-card'

  return (
    <div className={defaultNameCard}>
      <div className={`${defaultNameCard}__containImg`}>
        <Image src="/images/point.svg" width={25} height={24} alt="Ícono" />
      </div>
      <div className={`${defaultNameCard}__nameActivity`}>
        <p>{NameCard}</p>
      </div>
    </div>
  )
}

export default NameCard
