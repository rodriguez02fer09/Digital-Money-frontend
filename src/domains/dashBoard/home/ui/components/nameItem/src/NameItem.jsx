import '../styles/desktop.scss'
import Image from 'next/image'

const NameItem = ({description}) => {
  return (
    <div className="nameItem">
      <div className="nameItem__containImg">
        <Image
          src="/images/point.svg"
          width={25}
          height={24}
          alt="Point Icon"
        />
      </div>
      <div className="nameItem__nameCard">
        <p>Transferiste a {description}</p>
      </div>
    </div>
  )
}

export default NameItem
