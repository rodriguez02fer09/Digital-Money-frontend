import '../styles/desktop.scss'
import Image from 'next/image'

const NameCard = ({nameCard}) => {
  const defaulNameCard = 'NameCard'
  return (
    <div className={`${defaulNameCard}`}>
      <div className={`${defaulNameCard}__containImg`}>
        <Image src="/images/point.svg" width="25" height="24" />
      </div>
      <div className={`${defaulNameCard}__nameCard`}>
        <p>{nameCard}</p>
      </div>
    </div>
  )
}
export default NameCard
