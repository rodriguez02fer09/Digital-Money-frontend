'use client'
import {Roboto} from 'next/font/google'
import Head from 'next/head'

import Footer from '@domains/cross/ui/components/shared/footer'
import MenuDesplegable from '@domains/cross/ui/components/menuDesplegable'

import './index.scss'

export default function RootLayout({children}) {
  if (!children) return null
  const defaultClass = 'dashboard'
  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}__layout`}>
        <div className={`${defaultClass}__containMenuDesplegable`}>
          <MenuDesplegable />
        </div>
        <div className={`${defaultClass}__content`}>{children}</div>
      </div>
    </main>
  )
}
