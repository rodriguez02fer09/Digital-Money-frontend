'use client'

import {usePathname} from 'next/navigation'

import '../styles/desktop.scss'
import Link from 'next/link'
import requestLogoutAccount from '../../../../core/uses-cases/logoutAccount'

const MenuDesplegable = () => {
  const pathname = usePathname() // Hook para obtener la ruta actual

  const defaultMenu = 'contain-menu'

  return (
    <div className={`${defaultMenu}`}>
      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li className={pathname === '/dashBoard' ? 'selected' : ''}>
            <Link href="/dashBoard">Inicio</Link>
          </li>
          <li className={pathname === '/dashBoard/actividad' ? 'selected' : ''}>
            <Link href="/dashBoard/actividad">Actividad</Link>
          </li>
          <li className={pathname === '/dashBoard/perfil' ? 'selected' : ''}>
            <Link href="/dashBoard/perfil">Tu perfil</Link>
          </li>
          <li className={pathname === '/cargarDinero' ? 'selected' : ''}>
            <Link href="/cargarDinero">Cargar dinero</Link>
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
