'use client'
import '../styles/desktop.scss'

import {useContext} from 'react'

import Image from 'next/image'
import classNames from 'classnames'

import {UserContext} from '../../../../../../../Context/index'

import Button from '../../../button/index'
import Avatar from '../../../avatar/index'

const Header = ({color}) => {
  const defaultHeader = 'header'
  const imageSrc =
    color === 'green' ? '/images/logoblack.svg' : '/images/logoverde.svg'

  const customClass = classNames(defaultHeader, {
    [`${defaultHeader}--${color}`]: color,
  })

  const {acount} = useContext(UserContext)

  const firstname = acount?.firstname || 'Usuario'
  const lastName = acount?.lastName || ''

  return (
    <header className={`${customClass}`}>
      <div className={`${customClass}__containImage`}>
        <Image src={imageSrc} alt="Logo" width={87} height={34} />
      </div>
      {color !== 'green' && (
        <div className={`${customClass}__containButton`}>
          <Avatar username={{firstname, lastName}} />
        </div>
      )}
    </header>
  )
}

export default Header
