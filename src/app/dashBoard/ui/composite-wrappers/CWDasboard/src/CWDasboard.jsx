'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import ServiceButtons from '../../../components/serviceButtons'
import CWTransaction from '../../CWtransaction/src/CWTransaction'
import CWAvailableMoneyCard from '../../CWAvailableMoneyCard'

const CWDasboard = () => {
  return (
    <>
      <CWAvailableMoneyCard />
      <ServiceButtons />
      <CWTransaction />
    </>
  )
}

export default CWDasboard
