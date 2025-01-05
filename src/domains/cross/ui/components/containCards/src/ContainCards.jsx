import '../styles/desktop.scss'
import NumberCard from '../../numberCard'
import TitleCard from '../../titleCard/src/TitleCard'

const ContainCards = () => {
  const defaultClass = 'contain-card'
  return (
    <div className={defaultClass}>
      <NumberCard />
      <TitleCard />
    </div>
  )
}

export default ContainCards
