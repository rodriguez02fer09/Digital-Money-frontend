'use client'
import '../styles/desktop.scss'

import _ from 'lodash'

import {useRouter} from 'next/navigation'

import {useContext, useEffect} from 'react'

import {UserContext} from '../../../../../../Context/index'

import UserAvatar from '../../../../ui/components/userAvatar'
import Button from '../../../../ui/components/userAvatar'

import SloganAvatar from '../../sloganAvatar/src/SloganAvatar'

const Avatar = ({username}) => {
  const {firstname = '', lastName = ''} = username ?? {}
  const {acount, setAcount, token, userId, setUserId} = useContext(UserContext)
  const router = useRouter()

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-acount')
  }

  const defaultAvatar = 'contain-avatar'

  useEffect(() => {
    if (userId !== undefined && userId !== undefined) {
      fetch(`https://digitalmoney.digitalhouse.com/api/users/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      })
        .then(response => response.json())
        .then(account => {
          setAcount(account)
        })
        .catch(error =>
          console.error('Error al obtener los detalles del usuario:', error),
        )
    }
  }, [userId])

  useEffect(() => {
    if (token) {
      fetch(`https://digitalmoney.digitalhouse.com/api/account`, {
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      })
        .then(response => response.json())
        .then(user => {
          setUserId(() => user.user_id)
        })
        .catch(error =>
          console.error('Error al obtener los detalles del usuario:', error),
        )
    }
  }, [token])

  return (
    <>
      {acount !== null && !_.isEmpty(acount) ? (
        <div className={defaultAvatar}>
          <SloganAvatar username={acount} />
          <UserAvatar username={acount} />
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
