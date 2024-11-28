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

  const isLoggedIn = acount // Esto verifica si el usuario está logueado

  return (
    <header className={`${customClass}`}>
      <div className={`${customClass}__containImage`}>
        <Image src={imageSrc} alt="Logo" width={87} height={34} />
      </div>

      {/* Mostrar el botón si no está logueado */}
      {!isLoggedIn && (
        <div className={`${customClass}__containButton`}>
          <Button text="Iniciar sesión" />
        </div>
      )}

      {/* Mostrar Avatar si está logueado */}
      {isLoggedIn && (
        <div className={`${customClass}__containButton`}>
          <Avatar username={{firstname, lastName}} />
        </div>
      )}
    </header>
  )
}

export default Header
