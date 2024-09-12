'use client'
import {createContext, useState, useEffect} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [credencials, setCredencials] = useState({email: '', password: ''})
  const [acount, setAcount] = useState({})
  const [token, setToken] = useState({})

  useEffect(() => {
    if (typeof window != 'undefined') {
      const credencialsInLocalStorage = localStorage.getItem('isCredencials')
      if (credencialsInLocalStorage) {
        setCredencials(JSON.parse(credencialsInLocalStorage))
      }
    }

    if (typeof window !== 'undefined') {
      const acountInLocalStorage = localStorage.getItem('acount')
      if (acountInLocalStorage) {
        setAcount(JSON.parse(acountInLocalStorage))
      }
    }
    if (typeof window != 'undefined') {
      const tokenInSlocalStorage = localStorage.getItem('token')
      if (tokenInSlocalStorage) {
        setToken(tokenInSlocalStorage)
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
    if (typeof window !== 'undefined') {
      console.log(acount)
      localStorage.setItem('acount', JSON.stringify(acount))
    }
  }, [acount])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(token)
      localStorage.setItem('token', token)
    }
  }, [token])

  return (
    <UserContext.Provider
      value={{acount, setAcount, credencials, setCredencials, token, setToken}}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
