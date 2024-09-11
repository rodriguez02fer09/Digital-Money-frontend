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

  const cleanAccount = acc => {
    return {
      email: acc.email || '',
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(account)
      localStorage.setItem('account', JSON.stringify(cleanAccount(account)))
      localStorage.setItem('sign-out', JSON.stringify(signOut))
    }
  }, [account, signOut])

  return (
    <UserContext.Provider value={{account, setAccount, signOut, setSignOut}}>
      {children}
    </UserContext.Provider>
  )
}
