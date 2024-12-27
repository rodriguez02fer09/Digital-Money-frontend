import '../index.scss'

import CardView from '../../../../../cross/ui/components/cardView/src/CardView'
import CvuView from '../../../../../cross/ui/components/cvuView/src/CvuView'
import TitleView from '../../../../../cross/ui/components/titleView/src/TitleView'
import MoneyView from '../../../../../cross/ui/components/moneyView/src/MoneyView'
import CardBlack from '../../../../../cross/ui/components/CardBlack'

import useAccount from '../../../../../cross/core/hoocks/useAccount/src/useAccount'

import CardOptions from '../../../components/cardOptions'

const AvailableMoneyCard = () => {
  const defaultClass = 'available-money-card'
  const {account, user} = useAccount()

  const {available_amount = 0} = account ?? {}

  const options = [
    {text: 'Ver tarjetas', link: '#'},
    {text: 'Ver CVU', link: '#'},
  ]
  return (
    <CardBlack size="AvailableAmountCard">
      <div className={`${defaultClass}`}>
        <CardOptions options={options} />
        <div className={`${defaultClass}__title`}>
          <TitleView title="Dinero Disponible" />
        </div>
        <div className={`${defaultClass}__account`}>
          <MoneyView account={available_amount} />
        </div>
      </div>
    </CardBlack>
  )
}

export default AvailableMoneyCard
