import '../styles/main.scss'

const InfoAprove = () => {
  const defaultAprove = 'aprove'
  return (
    <div className={`${defaultAprove}`}>
      <div className="title">
        {' '}
        <p>Revisá que está todo bien</p>
      </div>

      <div className={`${defaultAprove}__date-amount`}>
        <p className="date">30 de agosto 2024 a 16:34 hs.</p>
        <p className="amount">900</p>
      </div>

      <div className={`${defaultAprove}__account`}>
        <p className="account-label">Para</p>
        <p className="account-type">Cuenta propia</p>
      </div>

      <div className={`${defaultAprove}__number-account`}>
        <p className="bank">Brubank</p>
        <p className="cvu"> 655708393934923884</p>
      </div>
    </div>
  )
}
export default InfoAprove
