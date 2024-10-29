import '../styles/desktop.scss'
import NameItem from '../../nameItem/src/NameItem'
import DateActivity from '../../dateActivity/src/DateActivity'
const Item = () => {
  return (
    <div className="contain-Item">
      <NameItem nameActivity="Transferiste a Rodrigo" />
      <DateActivity />
    </div>
  )
}
export default Item
