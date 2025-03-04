import '../styles/main.scss'

const InfoPayService = ({payData = {}}) => {
  const {
    amount = 0,
    dated = new Date().toISOString(),
    description = 'Pago',
  } = payData
  const defaultAprove = 'info-pay-service'

  return (
    <div className={defaultAprove}>
      <div className={`${defaultAprove}__date-amount`}>
        <p className="date">
          {new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date(dated))}
        </p>
        <p className="amount">{amount}</p>
      </div>
      <div className={`${defaultAprove}__account`}>
        <p className="account-label">Descripción</p>
        <p className="account-service">{description}</p>
      </div>
      <div className={`${defaultAprove}__number-account`}>
        <p className="card">Tarjeta</p>
        <p className="name-card">890</p>
      </div>
    </div>
  )
}

export default InfoPayService
