'use client'
import {useState} from 'react'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import '../styles/desktop.scss'
import UserMenuMobile from '@domains/cross/ui/components/userMenuMobile/src/UserMenuMobile'
import Link from 'next/link'
import requestLogoutAccount from '@domains/cross/core/uses-cases/logoutAccount'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const MenuDesplegable = ({onClose}) => {
  const {user} = useAccountStore()
  const [isMenuClosed, setIsMenuClosed] = useState(false)
  const pathname = usePathname()

  const defaultMenu = 'contain-menu'

  const handleClose = e => {
    e.stopPropagation()
    setIsMenuClosed(true)
    onClose()
  }

  const handleLinkClick = () => {
    setIsMenuClosed(true)
    onClose()
  }

  const handleLogout = async e => {
    e.preventDefault()
    await requestLogoutAccount()
    handleLinkClick()
  }

  if (isMenuClosed) return null
  return (
    <div className={defaultMenu}>
      <div className={`${defaultMenu}--containClose`} onClick={handleClose}>
        <Image
          src="/images/IconClose.svg"
          width={22}
          height={28}
          alt="Cerrar menú"
          className="close-icon"
          priority
        />
      </div>

      {/* Resto de tu código permanece igual */}
      <div className={`${defaultMenu}--containProfile`}>
        <UserMenuMobile {...user} />
      </div>

      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li className={pathname === '/dashBoard/home' ? 'selected' : ''}>
            <Link href="/dashBoard/home" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li className={pathname === '/dashBoard/activity' ? 'selected' : ''}>
            <Link href="/dashBoard/activity" onClick={handleLinkClick}>
              Actividad
            </Link>
          </li>
          <li className={pathname === '/dashBoard/perfil' ? 'selected' : ''}>
            <Link href="/dashBoard/perfil" onClick={handleLinkClick}>
              Tu perfil
            </Link>
          </li>
          <li
            className={pathname === '/dashBoard/depositMoney' ? 'selected' : ''}
          >
            <Link href="/dashBoard/depositMoney" onClick={handleLinkClick}>
              Cargar dinero
            </Link>
          </li>
          <li
            className={
              pathname === '/dashBoard/paymentService' ? 'selected' : ''
            }
          >
            <Link href="/dashBoard/paymentService" onClick={handleLinkClick}>
              Pagar servicios
            </Link>
          </li>
          <li className={pathname === '/dashBoard/cards' ? 'selected' : ''}>
            <Link href="/dashBoard/cards" onClick={handleLinkClick}>
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
