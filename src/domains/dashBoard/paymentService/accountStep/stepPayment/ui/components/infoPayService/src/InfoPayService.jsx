import '../styles/main.scss'

const InfoPayService = () => {
  const defaultAprove = 'info-pay-service'

  return (
    <div className={`${defaultAprove}`}>
      <div className={`${defaultAprove}__date-amount`}>
        <p className="date">Date</p>
        <p className="amount">$</p>
      </div>

      <div className={`${defaultAprove}__account`}>
        <p className="account-label">Para</p>
        <p className="account-service">name</p>
      </div>

      <div className={`${defaultAprove}__number-account`}>
        <p className="card">Tarjeta</p>
        <p className="name-card">890</p>
      </div>
    </div>
  )
}

export default InfoPayService
