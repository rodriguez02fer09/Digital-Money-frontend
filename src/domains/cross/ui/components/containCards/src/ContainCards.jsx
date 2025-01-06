import '../styles/desktop.scss'
import NumberCard from '@domains/cross/ui/components/numberCard/src/NumberCard'
import TitleCard from '@domains/cross/ui/components/titleCard/src/TitleCard'

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
