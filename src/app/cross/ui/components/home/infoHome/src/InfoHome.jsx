import '../styles/desktop.scss'

const InfoHome = () => {
  const defaultInfoHome = 'contain-home'
  return (
    <div className={`${defaultInfoHome} ${defaultInfoHome}--containInfoHome`}>
      <div
        className={`${defaultInfoHome} ${defaultInfoHome}--containTextPrimary`}
      >
        <p>De ahora en adelante, hacés más con tu dinero</p>
      </div>
      <div
        className={`${defaultInfoHome} ${defaultInfoHome}--containTextSecond`}
      >
        <p>
          Tu nueva <span class="negrilla">billetera virtual</span>.
        </p>
      </div>
    </div>
  )
}
export default InfoHome
