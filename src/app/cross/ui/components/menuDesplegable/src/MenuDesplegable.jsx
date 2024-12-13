import '../styles/desktop.scss'
import Link from 'next/link'

const MenuDesplegable = () => {
  const defaultMenu = 'contain-menu'
  return (
    <div className={`${defaultMenu}`}>
      <div className={`${defaultMenu}--contain-list`}>
        <ul>
          <li>
            <Link href="/dashBoard">Inicio</Link>
          </li>
          <li>
            <Link href="/dashBoard">Actividad</Link>
          </li>
          <li>
            <Link href="/perfil">Tu perfil</Link>
          </li>
          <li>
            <Link href="/">Cargar dinero</Link>
          </li>
          <li>
            <Link href="/">Pagar sevicios</Link>
          </li>
          <li>
            <Link href="/addCards">Tarjetas</Link>
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
