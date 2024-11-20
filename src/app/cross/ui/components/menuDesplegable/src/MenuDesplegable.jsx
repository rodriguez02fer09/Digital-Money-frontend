import '../styles/desktop.scss'
import Link from 'next/link'

const MenuDesplegable = () => {
  const defaultMenu = 'contain-menu'
  return (
    <div className={`${defaultMenu}`}>
      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li>
            <Link href="/dashboard">Inicio</Link>
          </li>
          <li>
            <Link href="/profile">Actividad</Link>
          </li>
          <li>
            <Link href="/settings">Tu perfil</Link>
          </li>
          <li>
            <Link href="/logout">Cargar dinero</Link>
          </li>
          <li>
            <Link href="/logout">Pagar sevicios</Link>
          </li>
          <li>
            <Link href="/logout">Tarjetas</Link>
          </li>
          <li>
            <Link href="/logout">Cerrar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MenuDesplegable
