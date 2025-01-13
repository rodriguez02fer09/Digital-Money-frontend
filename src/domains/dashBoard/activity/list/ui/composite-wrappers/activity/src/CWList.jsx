'use client'

import React from 'react'
import FilterForm from '@domains/dashBoard/activity/list/ui/components/filterForm/src/FilterForm'

const CWList = ({params}) => {
  const resolvedParams = React.use(params)

  return (
    <>
      <FilterForm slug={resolvedParams?.slug} showButton={true} />
    </>
  )
}

export default CWList
