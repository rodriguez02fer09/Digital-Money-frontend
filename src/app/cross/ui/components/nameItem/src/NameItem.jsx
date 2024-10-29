import '../styles/desktop.scss'
import Image from 'next/image'

const NameItem = ({nameActivity}) => {
  const defaulNameItem = 'nameItem'
  return (
    <div className={`${defaulNameItem}`}>
      <div className={`${defaulNameItem}__containImg`}>
        <Image src="/images/point.svg" width="25" height="24" />
      </div>
      <div className={`${defaulNameItem}__nameActivity`}>
        <p>{nameActivity}</p>
      </div>
    </div>
  )
}
export default NameItem
