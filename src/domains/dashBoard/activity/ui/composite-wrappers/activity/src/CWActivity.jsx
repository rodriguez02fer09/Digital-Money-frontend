'use client'
import './styles/main.scss'

import FilterForm from '@domains/dashBoard/activity/ui/components/filterForm/src/FilterForm'

const CWActivity = ({params, showButton}) => {
  return (
    <>
      <FilterForm slug={params?.slug} showButton={true} />
    </>
  )
}

export default CWActivity
