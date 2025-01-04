import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

const ContainHistoryCards = () => {
  const defaultHistory = 'contain-history-cards'

  const cards = [1, 2, 3, 4]

  return (
    <div className={defaultHistory}>
      {cards.map(card => (
        <ItemHistoryCards key={card.id} />
      ))}
    </div>
  )
}

export default ContainHistoryCards
