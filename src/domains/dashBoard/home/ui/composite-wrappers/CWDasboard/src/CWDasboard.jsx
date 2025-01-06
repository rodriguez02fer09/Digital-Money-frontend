'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import ServiceButtons from '@domains/dashBoard/home/ui/components/serviceButtons'
import CWActivity from '@domains/dashBoard/home/ui/composite-wrappers/CWactivity/src/CWActivity'
import CWAvailableMoneyCard from '@domains/dashBoard/home/ui/composite-wrappers/CWAvailableMoneyCard'

const CWDasboard = () => {
  return (
    <>
      <CWAvailableMoneyCard />
      <ServiceButtons />
      <CWActivity />
    </>
  )
}

export default CWDasboard
