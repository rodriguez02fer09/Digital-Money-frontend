'use client'
import '../styles/main.scss'
import CardBlack from '@domains/cross/ui/components/cardBlack/src/CardBlack'
import ContainAddCards from '@domains/cross/ui/components/containAddCards/src/ContainAddCards'

const defaultCard = 'add-card'

const AddCard = ({addCards, setAddCards}) => {
  const isDisabled = addCards.length >= 10

  return (
    <div className={defaultCard}>
      <CardBlack size="AddCard">
        <ContainAddCards
          addCards={addCards}
          setAddCards={setAddCards}
          isDisabled={isDisabled}
        />
      </CardBlack>
    </div>
  )
}

export default AddCard
