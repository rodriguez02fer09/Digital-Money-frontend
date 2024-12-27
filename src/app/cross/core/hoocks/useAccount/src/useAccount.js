import {useEffect, useState} from 'react'

import getDataLocalStore from '../../../../core/uses-cases/getDataLocalStore'
import request from '../../../../core/uses-cases/request'

const useAccount = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState(null)
  const [user, setUser] = useState(null)

  const validUserIsLogin = () => {
    const token = getDataLocalStore('token')

    if (token === undefined || token === null) {
      return false
    }

    return true
  }

  useEffect(() => {
    setIsLogin(validUserIsLogin())
  }, [])

  const setAUserCallback = data => {
    if (data?.error) {
      localStorage.removeItem('token')
      setUser(null)
    } else {
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
    }
  }

  const callbackRequet = data => {
    const {user_id} = data
    localStorage.setItem('account', JSON.stringify(data))
    setAccount(data)
    request(
      {
        path: `users/${user_id}`,
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      },
      setAUserCallback,
    )
  }

  useEffect(() => {
    const dataRequestUser = {
      path: 'account',
      method: 'GET',
      addHeaders: {
        Authorization: getDataLocalStore('token'),
      },
    }

    if (isLogin && user === null) {
      const r = request(dataRequestUser, callbackRequet)
      if (r?.error) {
        localStorage.removeItem('token')
      }
    }
  }, [isLogin, user])

  return {
    isLogin,
    account,
    user,
  }
}

export default useAccount
