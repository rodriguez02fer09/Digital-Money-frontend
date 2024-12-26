'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import MenuDesplegable from '../../../../../cross/ui/components/menuDesplegable'
import CardBlack from '../../../../../cross/ui/components/cardBlack'

import ServiceButtons from '../../../components/serviceButtons'
import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'
import CWTransactionMoneyComponent from '../../CWtransactionMoney/src/CWTransactionMoneyComponent'
import AvailableMoneyCard from '../../../components/availableMoneyCard/src/AvailableMoneyCard'

const CWDasboard = () => {
  const defaultClass = 'dashboard'
  const [account, setAccount] = useState(0)

  useEffect(() => {
    setAccount(() => JSON.parse(getDataLocalStore('account')))
    console.log(account)
  }, [])

  return (
    <>
      <AvailableMoneyCard />
      <ServiceButtons />
      <CWTransactionMoneyComponent />
    </>
  )
}

export default CWDasboard
