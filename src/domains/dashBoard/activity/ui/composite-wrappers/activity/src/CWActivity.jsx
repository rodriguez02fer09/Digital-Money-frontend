'use client'
import './styles/main.scss'

import FilterForm from '@domains/dashBoard/activity/ui/components/filterForm/src/FilterForm'

const CWActivity = ({params}) => {
  return (
    <div>
      <FilterForm slug={params?.slug} />
    </div>
  )
}

export default CWActivity
