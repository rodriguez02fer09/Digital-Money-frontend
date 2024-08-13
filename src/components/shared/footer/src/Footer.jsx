import '../styles/desktop.scss'
import classNames from 'classnames'

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
    </footer>
  )
}

export default Footer
