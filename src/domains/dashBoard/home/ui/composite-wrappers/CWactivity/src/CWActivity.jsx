import '../index.scss'
import {useEffect} from 'react'
import InputSearch from '@domains/dashBoard/home/ui/components/inputSearch'
import CardActivity from '@domains/cross/ui/components/cardActivity'
import ListActivity from '@domains/dashBoard/home/ui/components/listActivity'

import useActivity from '@domains/dashBoard/home/core/hooks/useActivity/src/useActivity'

const CWActivity = () => {
  const defaultClass = 'activity-money-component'
  const {activity} = useActivity()

  useEffect(() => {
    console.log(activity)
  }, [activity])

  return (
    <>
      <div className={defaultClass}>
        <InputSearch size="medium-prompt" placeholder="Busca tu actividad" />
      </div>
      <div className={`${defaultClass}__activity`}>
        <CardActivity size="Activity">
          <ListActivity activity={activity} />
        </CardActivity>
      </div>
    </>
  )
}
export default CWActivity
