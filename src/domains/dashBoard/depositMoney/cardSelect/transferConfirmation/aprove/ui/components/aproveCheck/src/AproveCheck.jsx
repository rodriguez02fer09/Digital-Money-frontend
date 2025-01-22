import '../styles/main.scss'
import Image from 'next/image'

const AproveCheck = () => {
  const defaultAproveCheck = 'aprove-check'
  return (
    <div className={`${defaultAproveCheck}`}>
      <div className={`${defaultAproveCheck}--img-title`}>
        <Image
          src="/images/checkBlack.svg"
          width={66}
          height={68}
          alt="check"
        />
        <h1>Ya cargamos el dinero en tu cuenta</h1>
      </div>
    </div>
  )
}

export default AproveCheck
