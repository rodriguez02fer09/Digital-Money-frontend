'use client'

import React from 'react'
import FilterForm from '@domains/dashBoard/activity/ui/components/filterForm/src/FilterForm'

const CWActivity = ({params}) => {
  const resolvedParams = React.use(params)

  return (
    <>
      <FilterForm slug={resolvedParams?.slug} showButton={true} />
    </>
  )
}

export default CWActivity
