import '../styles/main.scss'
import Image from 'next/image'

const MobileHeader = ({title}) => {
  const defaultHeader = 'mobile-header'
  return (
    <div className={defaultHeader}>
      <Image src="/images/arrowBlack.svg" width={14} height={22} alt="Arrow" />
      <p>{title}</p>
    </div>
  )
}

export default MobileHeader
