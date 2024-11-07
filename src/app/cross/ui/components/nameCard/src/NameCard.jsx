import '../styles/desktop.scss'
import Image from 'next/image'

const NameCard = ({NameCard}) => {
  const defaulNameCard = 'NameCard'
  return (
    <div className={`${defaulNameCard}`}>
      <div className={`${defaulNameCard}__containImg`}>
        <Image src="/images/point.svg" width="25" height="24" />
      </div>
      <div className={`${defaulNameCard}__nameActivity`}>
        <p>{NameCard}</p>
      </div>
    </div>
  )
}
export default NameCard
