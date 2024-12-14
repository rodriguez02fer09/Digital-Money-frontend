'use client'

import '../styles/desktop.scss'
import {useRouter} from 'next/navigation'
import Button from '../../button/src/Button'
import {useEffect, useState} from 'react'
import SloganAvatar from '../../sloganAvatar'
import UserAvatar from '../../userAvatar'
import 
  getDataLocalStore,
 from '../../../../../cross/core/uses-cases/getDataLocalStore'
import updateDataLocalStore from '../../../../../cross/core/uses-cases/updateDataLocalStore'
import request from '../../../../core/uses-cases/request'

const Avatar = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState()
  const router = useRouter()


   useEffect(() => {
    setIsLogin(getDataLocalStore('token') === null ? false : true)
  }, [])

  const setAccountCallback = (data) => {
    debugger
    setAccount(data)
  }

  const callbackRequet = (data) => {
    debugger
    const {user_id} = data;
    request({
      path: `users/${user_id}`,
      method: 'GET',
      addHeaders: {
        Authorization: getDataLocalStore('token'),
      }
    }, setAccountCallback)
  }

  useEffect(() => {
    if (isLogin && !account) {
      const dataRequest = {
        path: 'account',
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      }
      const r = request(dataRequest, callbackRequet)

      if (r?.error) {
        updateDataLocalStore('token', null)
      }

    } 

  }, [isLogin, account])

  const handleSignUp = () => {
    router.push('/sign-email')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
  }

  const defaultAvatar = 'contain-avatar'

  return (
    <div className={`${defaultAvatar}`}>
      {isLogin && account ? (
        <>
          <SloganAvatar {...account} />
          <UserAvatar {...account} />
        </>
      ) : (
        <>
          <div className={`${defaultAvatar}--button`}>
            <Button
              size="sign-up"
              label="Ingresar"
              color="black"
              onClick={handleSignUp}
            />
            <Button
              size="create-account" // Corregido el nombre del tamaño
              color="green"
              label="Crear cuenta"
              onClick={handleCreateAccount}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Avatar
