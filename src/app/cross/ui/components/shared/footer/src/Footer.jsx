import '../styles/desktop.scss'
import classNames from 'classnames'

import {ToastContainer, toast} from 'react-toastify'

const Footer = ({color}) => {
  const defaultFooter = 'footer'

  const customClass = classNames(defaultFooter, {
    [`${defaultFooter}--${color}`]: color,
  })

  return (
    <footer className={`${customClass}`}>
      <div className={`${customClass}--containText`}>
        <p>© 2022 Digital Money House</p>
      </div>
      <ToastContainer />
    </footer>
  )
}

export default Footer
