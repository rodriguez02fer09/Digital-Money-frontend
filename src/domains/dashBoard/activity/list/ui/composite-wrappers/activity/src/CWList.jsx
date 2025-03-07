'use client'

import React from 'react'
import FilterForm from '@domains/dashBoard/activity/list/ui/components/filterForm/src/FilterForm'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWList = ({title}) => {
  return (
    <>
      <MobileHeader title="Actividad" />
      <FilterForm showButton={true} />
    </>
  )
}

export default CWList
