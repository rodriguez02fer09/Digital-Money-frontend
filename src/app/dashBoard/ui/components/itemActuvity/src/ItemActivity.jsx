import '../styles/desktop.scss'
import NameItem from '../../nameItem/src/NameItem'
import DateActivity from '../../dateActivity/src/DateActivity'
import useAccount from '../../../../../cross/core/hoocks/useAccount/src/useAccount'

const ItemActivity = ({activity}) => {
  const {dated, destination, amount} = activity ?? {}

  const {account, user} = useAccount()

  return (
    <div className="contain-Item">
      <NameItem destination={destination} />
      <DateActivity date={dated} amount={amount} />
    </div>
  )
}

export default ItemActivity
