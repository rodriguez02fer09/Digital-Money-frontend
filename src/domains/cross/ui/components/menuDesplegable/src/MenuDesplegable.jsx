'use client'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import '../styles/desktop.scss'
import Link from 'next/link'
import requestLogoutAccount from '@domains/cross/core/uses-cases/logoutAccount'

const MenuDesplegable = () => {
  const [isClose, setIsClose] = useState(false)
  const pathname = usePathname()

  const defaultMenu = 'contain-menu'

  const handleClose = () => {
    setIsClose(true)
  }

  return (
    <div className={`${defaultMenu} ${isClose ? 'hidden' : ''}`}>
      <div className={`${defaultMenu}--containClose`}>
        <Image
          src="/images/IconClose.svg"
          width={22}
          height={28}
          alt="close"
          onClick={handleClose}
        />
      </div>

      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li className={pathname === '/dashBoard/home' ? 'selected' : ''}>
            <Link href="/dashBoard/home">Inicio</Link>
          </li>
          <li className={pathname === '/dashBoard/activity' ? 'selected' : ''}>
            <Link href="/dashBoard/activity">Actividad</Link>
          </li>
          <li className={pathname === '/dashBoard/perfil' ? 'selected' : ''}>
            <Link href="/dashBoard/perfil">Tu perfil</Link>
          </li>
          <li
            className={pathname === '/dashBoard/depositMoney' ? 'selected' : ''}
          >
            <Link href="/dashBoard/depositMoney">Cargar dinero</Link>
          </li>
          <li
            className={
              pathname === '/dashBoard/paymentService' ? 'selected' : ''
            }
          >
            <Link href="/dashBoard/paymentService">Pagar servicios</Link>
          </li>
          <li className={pathname === '/dashBoard/cards' ? 'selected' : ''}>
            <Link href="/dashBoard/cards">Tarjetas</Link>
          </li>
          <li>
            <Link href="#" onClick={requestLogoutAccount}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuDesplegable
