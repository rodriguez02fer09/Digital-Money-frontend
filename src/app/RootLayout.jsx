'use client'
import {usePathname} from 'next/navigation'
import Header from '@domains/cross/ui/components/shared/header'
import Footer from '@domains/cross/ui/components/shared/footer'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'

export default function RootLayout({children}) {
  const {account} = useAccount()
  const pathname = usePathname()

  const isAuthPage =
    pathname === '/account/sign-email' ||
    pathname === '/account/sign-password' ||
    pathname === '/account/create'

  const isLoggedIn = !!account?.id
  const color = isAuthPage ? 'green' : isLoggedIn ? 'black' : null

  return (
    <>
      <Header color={color} />
      {children}
      <Footer />
    </>
  )
}
