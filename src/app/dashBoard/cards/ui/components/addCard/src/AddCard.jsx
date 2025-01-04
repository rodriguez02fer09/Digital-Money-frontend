'use client'
import '../styles/main.scss'
import CardBlack from '../../../../../../cross/ui/components/cardBlack/src/CardBlack'

import ContainAddCards from '../../../../../../cross/ui/components/containAddCards/src/ContainAddCards'

const defaultCard = 'add-card'
const AddCard = () => {
  return (
    <div className={defaultCard}>
      <CardBlack size="AddCard">
        <ContainAddCards />
      </CardBlack>
    </div>
  )
}

export default AddCard
