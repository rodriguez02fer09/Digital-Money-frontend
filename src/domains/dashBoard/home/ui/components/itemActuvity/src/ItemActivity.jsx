import '../styles/desktop.scss'

import NameItem from '@domains/dashBoard/home/ui/components/nameItem/src/NameItem'
import DateActivity from '@domains/dashBoard/home/ui/components/dateActivity/src/DateActivity'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const ItemActivity = ({activity}) => {
  const {dated, description, amount, id} = activity ?? {}
  const {account, user} = useAccount()

  const handleShowDetail = () => {
    localStorage.setItem('activity', JSON.stringify(activity))
    console.log('activity', activity)
    window.location.href = '/dashBoard/activity/detail'
  }

  return (
    <button className="contain-Item" onClick={handleShowDetail}>
      <NameItem description={description} />
      <DateActivity date={dated} amount={amount} />
    </button>
  )
}

export default ItemActivity
