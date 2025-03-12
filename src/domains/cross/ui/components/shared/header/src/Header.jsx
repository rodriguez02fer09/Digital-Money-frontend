'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import classNames from 'classnames'
import Avatar from '@domains/cross/ui/components/avatar/index'

const Header = ({color}) => {
  const defaultHeader = 'header'
  const imageSrc =
    color === 'green' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  const customClass = classNames(defaultHeader, {
    [`${defaultHeader}--${color}`]: color, // Solo se agrega si `color` tiene un valor
  })

  return (
    <header className={customClass}>
      <div className={`${defaultHeader}__containImage`}>
        <Image src={imageSrc} alt="Logo" width={87} height={34} />
      </div>

      <div className={`${defaultHeader}__containButton`}>
        <Avatar />
      </div>
    </header>
  )
}

export default Header
