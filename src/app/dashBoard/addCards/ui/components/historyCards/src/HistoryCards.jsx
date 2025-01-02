'use client'
import '../styles/main.scss'
import CardActivity from '../../../../../../cross/ui/components/cardActivity'
import ContainHistoryCards from '../../../../../../cross/ui/components/containHistoryCards'

const defaultHistory = 'history-Cards'

const HistoryCards = () => {
  return (
    <div className={defaultHistory}>
      <CardActivity size="HistoryCard">
        <ContainHistoryCards />
      </CardActivity>
    </div>
  )
}

export default HistoryCards
