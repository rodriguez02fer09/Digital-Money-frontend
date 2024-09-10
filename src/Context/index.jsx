'use client'
import {createContext, useState, useEffect} from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [account, setAccount] = useState({})
  const [signOut, setSignOut] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accountInLocalStorage = localStorage.getItem('account')
      const signOutInLocalStorage = localStorage.getItem('sign-out')

      if (accountInLocalStorage) {
        setAccount(JSON.parse(accountInLocalStorage))
      }

      if (signOutInLocalStorage) {
        setSignOut(JSON.parse(signOutInLocalStorage))
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('account', JSON.stringify(account))
      localStorage.setItem('sign-out', JSON.stringify(signOut))
    }
  }, [account, signOut])

  return (
    <UserContext.Provider value={{account, setAccount, signOut, setSignOut}}>
      {children}
    </UserContext.Provider>
  )
}
