'use client'
import '../styles/desktop.scss'
import Image from 'next/image'

const UserAvatar = ({username, toggleMenu}) => {
  const defaultUser = 'contain-user'
  const {firstname = '', lastName = ''} = username ?? {}

  return (
    <div className={`${defaultUser}`}>
      {/* Texto visible en desktop */}
      <p>
        Hola, {'Fernanda'} {'Rodriguez'}
      </p>

      {/* Ícono visible en móviles */}
      {/* <div className={`${defaultUser}__icon`} onClick={toggleMenu}>
        <Image src="/images/iconMenú.svg" alt="Menú" width="33" height="26" />
      </div> */}
    </div>
  )
}

export default UserAvatar
