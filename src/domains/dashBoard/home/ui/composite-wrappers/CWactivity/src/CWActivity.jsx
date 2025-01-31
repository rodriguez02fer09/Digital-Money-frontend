import '../index.scss'
import {useEffect} from 'react'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity'

import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'

const CWActivity = () => {
  const defaultClass = 'activity-money-component'

  return (
    <>
      <div className={defaultClass}>
        <InputSearch type="text" placeholder="Busca tu actividad" />
      </div>
    </>
  )
}
export default CWActivity
