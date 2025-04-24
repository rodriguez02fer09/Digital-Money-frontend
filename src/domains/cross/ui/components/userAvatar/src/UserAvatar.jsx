'use client'
import '../styles/desktop.scss'
import Image from 'next/image'

const UserAvatar = ({firstname, lastname}) => {
  const defaultUser = 'contain-user'

  return (
    <div className={`${defaultUser}`}>
      <p>Hola, {`${firstname} ${lastname}`}</p>
    </div>
  )
}

export default UserAvatar
