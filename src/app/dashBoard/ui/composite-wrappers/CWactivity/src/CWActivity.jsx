import '../index.scss'
import {useEffect} from 'react'
import InputSearch from '../../../components/inputSearch'
import CardActivity from '../../../../../cross/ui/components/cardActivity'
import ListActivity from '../../../components/listActivity'

import useActivity from '../../../../core/hooks/useActivity/src/useActivity'

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
