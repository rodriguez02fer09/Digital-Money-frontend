'use client'
import '../styles/desktop.scss'
import Image from 'next/image'

const UserAvatar = ({firstname, lastname}) => {
  const defaultUser = 'contain-user'

  return (
    <div className={`${defaultUser}`}>
      {/* Texto visible en desktop */}
      <p>Hola, {`${firstname} ${lastname}`}</p>

      {/* Ícono visible en móviles */}
      {/* <div className={`${defaultUser}__icon`} onClick={toggleMenu}>
        <Image src="/images/iconMenú.svg" alt="Menú" width="33" height="26" />
      </div> */}
    </div>
  )
}

export default UserAvatar
