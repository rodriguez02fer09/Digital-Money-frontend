'use client'
import '../styles/desktop.scss'

import Image from 'next/image'
import classNames from 'classnames'

import Button from '../../../button/index'
import Avatar from '../../../avatar/index'

const Header = ({color}) => {
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

      <div className={`${customClass}__containButton`}>
        <Avatar />
      </div>
    </header>
  )
}

export default Header
