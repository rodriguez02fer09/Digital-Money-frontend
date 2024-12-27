'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import ServiceButtons from '../../../components/serviceButtons'
import CWActivity from '../../CWactivity/src/CWActivity'
import CWAvailableMoneyCard from '../../CWAvailableMoneyCard'

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
