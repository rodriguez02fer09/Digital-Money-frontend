import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

const ContainHistoryCards = () => {
  const cards = [1, 2, 3, 4]
  const defaultHistory = 'contain-history-cards'
  return (
    <div className={defaultHistory}>
      {cards.map(card => (
        <ItemHistoryCards NameCard="Terminada en 4067" />
      ))}
    </div>
  )
}

export default ContainHistoryCards
