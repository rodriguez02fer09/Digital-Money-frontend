import {useEffect, useState} from 'react'

import getDataLocalStore from '../../../../core/uses-cases/getDataLocalStore'
import request from '../../../../core/uses-cases/request'

const useAccount = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [account, setAccount] = useState(null)

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

  const setAccountCallback = response => {
    if (response?.error) {
      localStorage.removeItem('token')
      setAccount(null)
    } else {
      setAccount(response)
    }
  }

  const callbackRequet = data => {
    const {user_id} = data
    request(
      {
        path: `users/${user_id}`,
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      },
      setAccountCallback,
    )
  }

  useEffect(() => {
    if (isLogin && account === null) {
      const dataRequest = {
        path: 'account',
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      }
      const r = request(dataRequest, callbackRequet)

      if (r?.error) {
        localStorage.removeItem('token')
      }
    }
  }, [isLogin, account])

  return {
    isLogin,
    account,
  }
}

export default useAccount
