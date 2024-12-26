import '../styles/desktop.scss'
import Image from 'next/image'

const NameItem = ({destination}) => {
  const defaultNameItem = 'nameItem'
  return (
    <div className={`${defaultNameItem}`}>
      <div className={`${defaultNameItem}__containImg`}>
        <Image src="/images/point.svg" width="25" height="24" />
      </div>
      <div className={`${defaultNameItem}__nameCard`}>
        <p>transferiste a {destination}</p>
      </div>
    </div>
  )
}
export default NameItem
