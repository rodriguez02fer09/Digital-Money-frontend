'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import ServiceButtons from '@domains/dashBoard/home/ui/components/serviceButtons'
import CWActivity from '@domains/dashBoard/home/ui/composite-wrappers/CWactivity/src/CWActivity'
import CWAvailableMoneyCard from '@domains/dashBoard/home/ui/composite-wrappers/CWAvailableMoneyCard'
import HeaderPerfil from '@domains/dashBoard/perfil/ui/components/headerPerfil'

const CWDasboard = () => {
  return (
    <>
      <HeaderPerfil />
      <CWAvailableMoneyCard />
      <ServiceButtons />
      <CWActivity />
    </>
  )
}

export default CWDasboard
