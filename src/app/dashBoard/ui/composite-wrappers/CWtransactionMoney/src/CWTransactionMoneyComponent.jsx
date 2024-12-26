import '../index.scss'
import InputSearch from '../../../../../cross/ui/components/InputSearch'
import CardActivity from '../../../../../cross/ui/components/cardActivity'
import CardList from '../../../../../cross/ui/components/cardList'

const CWTransactionMoneyComponent = () => {
  const defaultClass = 'transaction-money-component'
  return (
    <>
      <div className={defaultClass}>
        <InputSearch size="medium-prompt" placeholder="Busca tu actividad" />
      </div>
      <div className={`${defaultClass}__activity`}>
        <CardActivity size="Activity">
          <CardList />
        </CardActivity>
      </div>
    </>
  )
}
export default CWTransactionMoneyComponent
