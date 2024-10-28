import '../styles/desktop.scss'
import CardView from '../../cardView/src/CardView'
import CvuView from '../../cvuView'
import TitleView from '../../titleView'
import MoneyView from '../../moneyView'

const AvailableMoneyCard = () => {
  const defaultClass = 'container-availableMoneyCard'

  return (
    <div className={`${defaultClass}`}>
      <div className={`${defaultClass}__views`}>
        <CardView text="Ver tarjetas" />
        <CvuView textcvu="Ver CVU" />
      </div>
      <div className={`${defaultClass}__title`}>
        <TitleView title="Dinero Disponible" />
      </div>
      <div className={`${defaultClass}__account`}>
        <MoneyView account="$ 6.890.534,17" />
      </div>
    </div>
  )
}

export default AvailableMoneyCard
