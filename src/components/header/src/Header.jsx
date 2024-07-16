import Image from 'next/image'
import Button from '../../button/index'
import '../../../../public/images/logoverde.svg'

const Header = ({type, label}) => {
  const defaultHeader = 'header'

  return (
    <header className={`${defaultHeader} ${defaultHeader}`}>
      <div className={`${defaultHeader} ${defaultHeader}--containImage`}>
        <Image src="/images/logoverde.svg" alt="Logo" width={100} height={50} />
      </div>
      <div className={`${defaultHeader} ${defaultHeader}--containButton`}>
        <Button type={'boton-responsive'} label={'Ingresar'} />
        <Button />
      </div>
    </header>
  )
}

export default Header
