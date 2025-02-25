'use client'
import '../styles/main.scss'

import {useState} from 'react'

import SearchServices from '@domains/dashBoard/paymentService/list/ui/components/searchServices/src/SearchServices'
import Historyservices from '@domains/dashBoard/paymentService/list/ui/components/historyServices/src/HistoryServices'

const CWhistoryservices = () => {
  return (
    <>
      <SearchServices />
      <Historyservices />
    </>
  )
}

export default CWhistoryservices
