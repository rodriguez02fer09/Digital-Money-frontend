import '../styles/main.scss'

const InfoAprove = () => {
  const defaultAprove = 'aprove'
  return (
    <div className={`${defaultAprove}`}>
      <div className={`${defaultAprove}__date-amount`}>
        <p className="date">17 de agosto 2022 a 16:34 hs.</p>
        <p className="amount">$300</p>
      </div>

      <div className={`${defaultAprove}__account`}>
        <p className="account-label">Para</p>
        <p className="account-type">Cuenta propia</p>
      </div>

      <div className={`${defaultAprove}__number-account`}>
        <p className="bank">Brubank</p>
        <p className="cvu">CVU: 0000002100075990000000</p>
      </div>
    </div>
  )
}
export default InfoAprove
