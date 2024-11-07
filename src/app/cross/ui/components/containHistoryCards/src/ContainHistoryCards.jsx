import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

const ContainHistoryCards = () => {
  const defaultHistory = 'ContainHistory'
  return (
    <div className={`${defaultHistoryCards}`}>
      <ItemHistoryCards />
    </div>
  )
}

export default ContainHistoryCards
