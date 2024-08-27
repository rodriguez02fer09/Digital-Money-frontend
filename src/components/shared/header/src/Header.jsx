import Image from 'next/image'
import Button from '../../../button/index'
import '../styles/desktop.scss'
import classNames from 'classnames'
import Avatar from '../../../avatar/index'

const Header = ({color, size, userName}) => {
  const defaultHeader = 'header'
  const imageSrc =
    color === 'green' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  const customClass = classNames(defaultHeader, {
    [`${defaultHeader}--${color}`]: color,
  })

  return (
    <header className={`${customClass}`}>
      <div className={`${customClass}__containImage`}>
        <Image src={imageSrc} alt="Logo" width={87} height={34} />
      </div>
      {color !== 'green' && (
        <div className={`${customClass}__containButton`}>
          {/* <Button
            size="sign-up"
            color="black"
            label="Sign In"
            href="/sign-email"
          />
          <Button
            size="create-acount"
            color="green"
            label="Create Account"
            href="/create-account"
          /> */}
          <Avatar name={userName?.name} lastName={userName?.lastName} />
        </div>
      )}
    </header>
  )
}

export default Header
