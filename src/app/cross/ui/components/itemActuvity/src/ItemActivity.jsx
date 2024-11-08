import '../styles/desktop.scss'
import NameItem from '../../nameItem/src/NameItem'
import DateActivity from '../../dateActivity/src/DateActivity'
const ItemActivity = () => {
  return (
    <div className="contain-Item">
      <NameItem nameActivity="Transferiste a Rodrigo" />
      <DateActivity />
    </div>
  )
}
export default ItemActivity
