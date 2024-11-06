import '../styles/desktop.scss'
import Item from '../../item/src/Item'

const CardList = () => {
  const items = [1, 2, 3, 4]

  return (
    <div className="contain-cardList">
      {items.map(item => (
        <Item key={item} />
      ))}
    </div>
  )
}

export default CardList
