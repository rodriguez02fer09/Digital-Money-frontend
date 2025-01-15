'use client'
import './styles/desktop.scss'

import {useEffect, useState} from 'react'

import ServiceButtons from '@domains/dashBoard/home/ui/components/serviceButtons'
import FilterForm from '@domains/dashBoard/activity/list/ui/components/filterForm/src/FilterForm'
import CWAvailableMoneyCard from '@domains/dashBoard/home/ui/composite-wrappers/CWAvailableMoneyCard'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWDasboard = ({title}) => {
  return (
    <>
      <MobileHeader title="Inicio" />
      <CWAvailableMoneyCard />
      <ServiceButtons />
      <FilterForm />
    </>
  )
}

export default CWDasboard
