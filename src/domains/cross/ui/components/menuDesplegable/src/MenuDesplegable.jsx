'use client'

import {usePathname} from 'next/navigation'

import '../styles/desktop.scss'
import Link from 'next/link'
import requestLogoutAccount from '@domains/cross/core/uses-cases/logoutAccount'

const MenuDesplegable = () => {
  const pathname = usePathname() // Hook para obtener la ruta actual

  const defaultMenu = 'contain-menu'

  return (
    <div className={`${defaultMenu}`}>
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
          <li className={pathname === '/pagarServicios' ? 'selected' : ''}>
            <Link href="/pagarServicios">Pagar servicios</Link>
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
