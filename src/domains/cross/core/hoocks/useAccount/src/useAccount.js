'use client'

import {create} from 'zustand'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import updateDataLocalStore from '@domains/cross/core/uses-cases/updateDataLocalStore'
import request from '@domains/cross/core/uses-cases/request'

const useAccountStore = create((set, get) => ({
  isLogin: false,
  account: null,
  user: null, // `user` ahora incluye la lógica de `perfil`.
  setUser: user => set({user}),

  // Actions
  validUserIsLogin: () => {
    const token = getDataLocalStore('token')
    return token !== undefined && token !== null
  },

  updateUser: data => {
    updateDataLocalStore('user', JSON.stringify(data))
    set({user: data})
  },

  handleUserResponse: data => {
    if (data?.error) {
      localStorage.removeItem('token')
      set({user: null})
    } else {
      localStorage.setItem('user', JSON.stringify(data))
      set({user: data})
    }
  },

  fetchAccount: () => {
    const isLogin = get().validUserIsLogin()
    set({isLogin})

    if (isLogin) {
      const dataRequestUser = {
        path: 'account',
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      }

      request(dataRequestUser, data => {
        if (data?.error) {
          localStorage.removeItem('token')
        } else {
          const {user_id} = data
          localStorage.setItem('account', JSON.stringify(data))
          set({account: data})

          request(
            {
              path: `users/${user_id}`,
              method: 'GET',
              addHeaders: {
                Authorization: getDataLocalStore('token'),
              },
            },
            get().handleUserResponse,
          )
        }
      })
    }
  },
}))

export default useAccountStore
