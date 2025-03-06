import '../styles/desktop.scss'
import {useRouter} from 'next/router'
import NameItem from '@domains/dashBoard/home/ui/components/nameItem/src/NameItem'
import DateActivity from '@domains/dashBoard/home/ui/components/dateActivity/src/DateActivity'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const ItemActivity = ({activity}) => {
  const {dated, description, amount, id} = activity ?? {}
  const {account, user} = useAccount()
  const router = useRouter()

  const handleShowDetail = () => {
    localStorage.setItem('activity', JSON.stringify(activity))
    console.log('activity', activity)
    router.push('/dashBoard/activity/detail')
  }

  return (
    <button onClick={handleShowDetail}>
      <div className="contain-Item">
        <NameItem description={description} />
        <DateActivity date={dated} amount={amount} />
      </div>
    </button>
  )
}

export default ItemActivity
