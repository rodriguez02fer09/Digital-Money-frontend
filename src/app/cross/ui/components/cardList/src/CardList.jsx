import '../styles/desktop.scss'
import ItemActuvity from '../../itemActuvity/src/ItemActivity'

const CardList = () => {
  const items = [1, 2, 3, 4]

  return (
    <div className="contain-cardList">
      {items.map(item => (
        <ItemActuvity key={item} />
      ))}
    </div>
  )
}

export default CardList
