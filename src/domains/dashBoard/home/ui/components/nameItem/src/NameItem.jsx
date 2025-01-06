import '../styles/desktop.scss'
import Image from 'next/image'

const NameItem = ({destination}) => {
  const defaultNameItem = 'nameItem'

  return (
    <div className={`${defaultNameItem}`}>
      <div className={`${defaultNameItem}__containImg`}>
        <Image
          src="/images/point.svg"
          width="25"
          height="24"
          alt="Point Icon"
        />
      </div>
      <div className={`${defaultNameItem}__nameCard`}>
        <p>Transferiste a {destination}</p>
      </div>
    </div>
  )
}

export default NameItem
