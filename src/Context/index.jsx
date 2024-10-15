'use client'
import {createContext, useState, useEffect} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [credencials, setCredencials] = useState({email: '', password: ''})
  const [acount, setAcount] = useState()
  const [token, setToken] = useState()
  const [userId, setUserId] = useState()

  useEffect(() => {
    if (typeof window != 'undefined') {
      const credencialsInLocalStorage = localStorage.getItem('credencials')
      if (credencialsInLocalStorage) {
        setCredencials(JSON.parse(credencialsInLocalStorage))
      }
    }

    if (typeof window !== 'undefined') {
      const acountInLocalStorage = localStorage.getItem('acount')
      if (acountInLocalStorage !== undefined) {
        setAcount(JSON.parse(acountInLocalStorage))
      }
    }

    if (typeof window !== 'undefined') {
      const tokenInSlocalStorage = localStorage.getItem('token')
      if (tokenInSlocalStorage !== undefined) {
        setToken(tokenInSlocalStorage)
      }
    }

    if (typeof window !== 'undefined') {
      const userIdInLocalStorage = localStorage.getItem('user_id')
      if (userIdInLocalStorage !== undefined) {
        setUserId(userIdInLocalStorage)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(credencials)
      localStorage.setItem('credencials', JSON.stringify(credencials))
    }
  }, [credencials])

  useEffect(() => {
    if (typeof window !== 'undefined' && acount !== undefined) {
      console.log(acount)
      localStorage.setItem('acount', JSON.stringify(acount))
    }
  }, [acount])

  useEffect(() => {
    if (typeof window !== 'undefined' && token !== undefined) {
      console.log(token)
      localStorage.setItem('token', token)
    }
  }, [token])

  useEffect(() => {
    if (typeof window !== 'undefined' && userId !== undefined) {
      localStorage.setItem('user_id', userId)
    }
  }, [userId])

  return (
    <UserContext.Provider
      value={{
        acount,
        setAcount,
        credencials,
        setCredencials,
        token,
        setToken,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
