import {useState, useEffect} from 'react'
import useAccountStore from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import getFilterDate from '@domains/dashBoard/activity/list/core/uses-cases/getFilterDate'
import filterWord from '@domains/dashBoard/activity/list/core/uses-cases/filterUpWork'
import {deburr} from 'lodash'
import {parseISO} from 'date-fns'

const timeZone = 'UTC'

const useActivity = ({searchItem = ''}) => {
  const {account} = useAccountStore()

  const {id: account_id} = account ?? {}
  const [activity, setActivity] = useState([])

  const updateStateActivity = currentActivity => {
    console.log('Fecha filtrada:', getFilterDate('lastWeek')) // Verifica si se imprime correctamente
    debugger
    setActivity(currentActivity)
  }

  useEffect(() => {
    if (account_id) {
      const filterItem = searchItem ? `?search=${searchItem}` : ''
      const dateFilter = getFilterDate('lastWeek')

      request(
        {
          path: `accounts/${account_id}/activity${filterItem}`,
          method: 'GET',
          addHeaders: {
            Authorization: `${getDataLocalStore('token')}`,
          },
        },
        updateStateActivity,
      )
    }
  }, [account, searchItem])

  return {
    activity,
    updateStateActivity,
  }
}

export default useActivity
