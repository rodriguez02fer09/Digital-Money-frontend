'use client'
import '../styles/desktop.scss'
import SloganAvatar from '../../sloganAvatar/src/SloganAvatar'
import UserAvatar from 'app/components/userAvatar'
import Button from 'app/components/button'
import {useRouter} from 'next/navigation'
import {useContext} from 'react'
import {UserContext} from '../../../Context/index'
import _ from 'lodash'

const Avatar = ({username}) => {
  const {firstname = '', lastName = ''} = username ?? {}

  const {acount, setAcount} = useContext(UserContext)

  const router = useRouter()

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-acount')
  }

  const defaultAvatar = 'contain-avatar'
  return (
    <>
      {!_.isEmpty(acount) ? (
        <div className={defaultAvatar}>
          <SloganAvatar username={username} />
          <UserAvatar username={username} />
        </div>
      ) : (
        <>
          <Button
            size="sign-up"
            label="Ingresar"
            href="/sign-email"
            color="black"
            onClick={handleSignUp}
          />
          <Button
            size="create-acount"
            color="green"
            label="Crear cuenta"
            href="/create-account"
            onClick={handleCreateAccount}
          />
        </>
      )}
    </>
  )
}

export default Avatar
