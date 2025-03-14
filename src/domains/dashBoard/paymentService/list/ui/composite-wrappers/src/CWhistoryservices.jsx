'use client'

import '../styles/main.scss'
import {useState} from 'react'
import SearchServices from '@domains/dashBoard/paymentService/list/ui/components/searchServices/src/SearchServices'
import Historyservices from '@domains/dashBoard/paymentService/list/ui/components/historyServices/src/HistoryServices'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWhistoryservices = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      {' '}
      <MobileHeader title="Pago se servicios" />
      <SearchServices onFilter={setSearchQuery} />
      <Historyservices searchQuery={searchQuery} />
    </>
  )
}

export default CWhistoryservices
