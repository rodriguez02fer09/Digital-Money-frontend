import '../styles/desktop.scss'
import ItemHistoryCards from '../../itemHistoryCards/src/ItemHistoryCards'

const ContainHistoryCards = ({cards = []}) => {
  const defaultHistory = 'contain-history-cards'
  return (
    <div className={defaultHistory}>
      {cards.map((card, index) => {
        ;<ItemHistoryCards key={index} NameCard="Terminada en 4067" />
      })}
    </div>
  )
}

export default ContainHistoryCards
