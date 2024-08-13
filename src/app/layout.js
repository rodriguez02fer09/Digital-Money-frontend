import {Inter} from 'next/font/google'
import Header from '../components/shared/header/src/Header.jsx'
import Footer from '../components/shared/footer/src/Footer.jsx'
import '../sass/globals.scss'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header color={'black'} />
        {children} {/* Asegúrate de renderizar los hijos */}
        <Footer type={'footer-home'} />
      </body>
    </html>
  )
}
