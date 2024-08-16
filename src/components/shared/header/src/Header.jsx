import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../button/index'
import '../styles/desktop.scss'
import classNames from 'classnames'

const Header = ({color, size}) => {
  const defaultHeader = 'header'
  const imageSrc =
    color === 'green' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  const customClass = classNames(defaultHeader, {
    [`${defaultHeader}--${color}`]: color,
  })

  return (
    <header className={`${customClass}`}>
      <div className={`${customClass}__containImage`}>
        <Image src={imageSrc} alt="Logo" width={100} height={50} />
      </div>
      {color !== 'green' && (
        <div className={`${customClass}__containButton`}>
          <Link href="/sign-email">
            <Button size="sign-up" color="black" label="Sign In" />
          </Link>
          <Link href="/create-account">
            <Button
              size={'create-acount'}
              color="green"
              label="Create Account"
            />
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
