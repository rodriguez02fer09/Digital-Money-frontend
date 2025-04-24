'use client'
import '../styles/desktop.scss'

import Image from 'next/image'

const UserMenuMobile = ({firstname, lastname}) => {
  const defaultUser = 'contain-user-mobile'

  return (
    <div className={`${defaultUser}`}>
      <p>Hola,</p>
      <p>{`${firstname} ${lastname}`}</p>
    </div>
  )
}

export default UserMenuMobile
