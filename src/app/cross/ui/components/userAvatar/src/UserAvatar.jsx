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
    </div>
  )
}

export default UserAvatar
