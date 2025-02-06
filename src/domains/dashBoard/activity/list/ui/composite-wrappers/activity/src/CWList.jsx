'use client'

import React from 'react'
import FilterForm from '@domains/dashBoard/activity/list/ui/components/filterForm/src/FilterForm'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWList = ({params = {}, title}) => {
  return (
    <>
      <MobileHeader title="Actividad" />
      <FilterForm slug={params?.slug} showButton={true} />
    </>
  )
}

export default CWList
