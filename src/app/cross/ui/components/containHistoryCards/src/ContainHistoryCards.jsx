import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

const ContainHistoryCards = () => {
  const defaultHistory = 'contain-history-cards'

  const cards = [
    {id: 1, name: 'Terminada en 1234'},
    {id: 2, name: 'Terminada en 5678'},
    {id: 3, name: 'Terminada en 4067'},
    {id: 4, name: 'Terminada en 4067'},
  ]

  return (
    <div className={defaultHistory}>
      {cards.map(card => (
        <ItemHistoryCards key={card.id} NameCard={card.name} />
      ))}
    </div>
  )
}

export default ContainHistoryCards
