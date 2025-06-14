import {useState, useEffect} from 'react'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import isWithinDateRange from '@domains/dashBoard/activity/list/core/uses-cases/isWithinDateRange'
import filterUpWork from '@domains/dashBoard/activity/list/core/uses-cases/filterUpWork'
import {parseISO} from 'date-fns'

const useActivity = ({searchItem = ''}) => {
  const {account} = useAccountStore()

  const {id: account_id} = account ?? {}
  const [activity, setActivity] = useState([]) //obtiene las actividades del ususario

  const updateStateActivity = currentActivity => {
    setActivity(currentActivity)
  }

  useEffect(() => {
    if (account_id) {
      request(
        {
          path: `accounts/${account_id}/activity`,
          method: 'GET',
          addHeaders: {
            Authorization: `${getDataLocalStore('token')}`,
          },
        },
        updateStateActivity,
      )
    }
  }, [account_id, searchItem])

  return {
    activity,
    updateStateActivity,
  }
}

export default useActivity
