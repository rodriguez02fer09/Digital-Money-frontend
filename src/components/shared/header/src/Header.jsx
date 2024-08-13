import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../button/index'
import '../styles/desktop.scss'
import classNames from 'classnames'

const Header = ({type, color}) => {
  const defaultHeader = 'header'
  const imageSrc =
    color === 'green' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  const customClass = classNames(defaultHeader, {
    [`${defaultHeader}--${color}`]: color,
  })

  return (
    <header className={`${customClass}`}>
      <div className={`${customClass}--containImage`}>
        <Image src={imageSrc} alt="Logo" width={100} height={50} />
      </div>
      {color !== 'green' && (
        <div className={`${customClass}--containButton`}>
          <Button
            size={'sign-up'}
            color={'black'}
            label="Sign In"
            href="/sign-email"
          />
          <Button
            size={'create-acount'}
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
