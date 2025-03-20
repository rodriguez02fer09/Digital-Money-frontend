'use client'
import '../styles/desktop.scss'
import classNames from 'classnames'
import {ToastContainer} from 'react-toastify'

const Footer = ({color}) => {
  const defaultFooter = 'footer'

  const customClass = classNames(defaultFooter, {
    [`${defaultFooter}--${color}`]: color, // Solo se agrega si `color` tiene un valor
  })

  return (
    <footer className={customClass}>
      <div className={`${defaultFooter}__containText`}>
        <p>© 2022 Digital Money House</p>
      </div>
      <ToastContainer />
    </footer>
  )
}

export default Footer
