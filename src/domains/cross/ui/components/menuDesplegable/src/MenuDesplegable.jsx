'use client'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import '../styles/desktop.scss'
import UserMenuMobile from '@domains/cross/ui/components/userMenuMobile/src/UserMenuMobile'
import Link from 'next/link'
import requestLogoutAccount from '@domains/cross/core/uses-cases/logoutAccount'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const MenuDesplegable = ({onClose, onMobileClose, onMobileLinkClick}) => {
  const {user} = useAccountStore()
  const [isMenuClosed, setIsMenuClosed] = useState(true)
  const pathname = usePathname()

  const defaultMenu = 'contain-menu'

  const handleLogout = async e => {
    e.preventDefault()
    await requestLogoutAccount()
    onMobileLinkClick?.()
  }

  if (!isMenuClosed) return null
  return (
    <div className={defaultMenu}>
      <div
        className={`${defaultMenu}--containClose`}
        onClick={onMobileClose || onClose}
      >
        <Image
          src="/images/IconClose.svg"
          width={22}
          height={28}
          alt="Cerrar menú"
          className="close-icon"
          priority
        />
      </div>

      <div className={`${defaultMenu}--containProfile`}>
        <UserMenuMobile {...user} />
      </div>

      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li className={pathname === '/dashBoard/home' ? 'selected' : ''}>
            <Link href="/dashBoard/home" onClick={onMobileLinkClick || onClose}>
              Inicio
            </Link>
          </li>
          <li className={pathname === '/dashBoard/activity' ? 'selected' : ''}>
            <Link
              href="/dashBoard/activity"
              onClick={onMobileLinkClick || onClose}
            >
              Actividad
            </Link>
          </li>
          <li className={pathname === '/dashBoard/perfil' ? 'selected' : ''}>
            <Link
              href="/dashBoard/perfil"
              onClick={onMobileLinkClick || onClose}
            >
              Tu perfil
            </Link>
          </li>
          <li
            className={pathname === '/dashBoard/depositMoney' ? 'selected' : ''}
          >
            <Link
              href="/dashBoard/depositMoney"
              onClick={onMobileLinkClick || onClose}
            >
              Cargar dinero
            </Link>
          </li>
          <li
            className={
              pathname === '/dashBoard/paymentService' ? 'selected' : ''
            }
          >
            <Link
              href="/dashBoard/paymentService"
              onClick={onMobileLinkClick || onClose}
            >
              Pagar servicios
            </Link>
          </li>
          <li className={pathname === '/dashBoard/cards' ? 'selected' : ''}>
            <Link
              href="/dashBoard/cards"
              onClick={onMobileLinkClick || onClose}
            >
              Tarjetas
            </Link>
          </li>
          <li>
            <Link href="#" onClick={handleLogout}>
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuDesplegable
