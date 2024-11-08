// ItemHistoryCards.js
import '../styles/desktop.scss'
import DeleteCard from '../../deleteCard'
import NameCard from '../../NameCard'

const ItemHistoryCards = ({NameCard: nameCardProp}) => {
  return (
    <div className="contain-ItemHistoryCards">
      <NameCard NameCard={nameCardProp} />
      <DeleteCard />
    </div>
  )
}

export default ItemHistoryCards
