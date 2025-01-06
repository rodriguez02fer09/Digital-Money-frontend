import '../styles/desktop.scss'
import NameItem from '@domains/dashBoard/home/ui/components/nameItem/src/NameItem'
import DateActivity from '@domains/dashBoard/home/ui/components/dateActivity/src/DateActivity'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'

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
