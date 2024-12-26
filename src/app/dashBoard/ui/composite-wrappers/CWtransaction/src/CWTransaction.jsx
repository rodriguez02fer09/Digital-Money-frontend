import '../index.scss'
import {useEffect} from 'react'
import InputSearch from '../../../../../cross/ui/components/InputSearch'
import CardActivity from '../../../../../cross/ui/components/cardActivity'
import CardList from '../../../../../cross/ui/components/cardList'

import useTransactions from '../../../../core/hooks/useTransactions/src/useTransactions'

const CWTransactionMoney = () => {
  const defaultClass = 'transaction-money-component'
  const {transactions} = useTransactions()

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
export default CWTransactionMoney
