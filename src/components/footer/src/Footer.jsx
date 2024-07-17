import '../styles/desktop.scss'

const Footer = ({type}) => {
  const defaultFooter = 'footer'
  return (
    <footer className={`${defaultFooter} ${defaultFooter}--${type}`}>
      <div className={`${defaultFooter}--containText`}>
        <p>© 2022 Digital Money House</p>
      </div>
    </footer>
  )
}

export default Footer
