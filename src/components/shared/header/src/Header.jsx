import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../button/index'
import '../styles/desktop.scss'

const Header = ({type, size, color}) => {
  const defaultHeader = 'header'
  const imageSrc =
    type === 'login-header' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  return (
    <header className={`${defaultHeader} ${defaultHeader}--${type}`}>
      <div className={`${defaultHeader}--containImage`}>
        <Image src={imageSrc} alt="Logo" width={100} height={50} />
      </div>
      {type !== 'home-header' && (
        <div className={`${defaultHeader}--containButton`}>
          <Button
            size={'sign-up'}
            color={'black'}
            label="Sign In"
            href="/sign-email"
          />
          <Button
            size={'sign-up'}
            color={'green'}
            label="Create Acount"
            href="/create-acount"
          />
        </div>
      )}
    </header>
  )
}

export default Header
