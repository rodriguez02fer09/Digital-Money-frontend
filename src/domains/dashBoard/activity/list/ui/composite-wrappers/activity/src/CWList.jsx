'use client'

import React from 'react'
import FilterForm from '@domains/dashBoard/activity/list/ui/components/filterForm/src/FilterForm'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWList = ({params, title}) => {
  const resolvedParams = React.use(params)

  return (
    <>
      <MobileHeader title="Actividad" />
      <FilterForm slug={resolvedParams?.slug} showButton={true} />
    </>
  )
}

export default CWList
