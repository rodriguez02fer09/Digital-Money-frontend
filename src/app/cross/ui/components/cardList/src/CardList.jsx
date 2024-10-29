import '../styles/desktop.scss'
import Item from '../../item/src/Item'

const CardList = () => {
  return (
    <div className="contain-cardList">
      {[...Array(4)].map((_, index) => (
        <Item key={index} />
      ))}
    </div>
  )
}

export default CardList
