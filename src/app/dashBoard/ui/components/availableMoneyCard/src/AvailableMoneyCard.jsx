import '../index.scss'

import CardView from '../../../../../cross/ui/components/cardView/src/CardView'
import CvuView from '../../../../../cross/ui/components/cvuView/src/CvuView'
import TitleView from '../../../../../cross/ui/components/titleView/src/TitleView'
import MoneyView from '../../../../../cross/ui/components/moneyView/src/MoneyView'
import CardBlack from '../../../../../cross/ui/components/CardBlack'

import CardOptions from '../../cardOptions/src/CardOptions'
//import useAccount from '../../../../../cross/core/hoocks/useAccount'

const AvailableMoneyCard = () => {
  const defaultClass = 'available-money-card'
  //const {account} = useAccount()
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
          <MoneyView account="$ 6.890.534,17" />
        </div>
      </div>
    </CardBlack>
  )
}

export default AvailableMoneyCard
