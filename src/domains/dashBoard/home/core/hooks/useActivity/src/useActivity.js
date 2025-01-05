import {useState, useEffect} from 'react'
import useAccount from '../../../../../../cross/core/hoocks/useAccount/src/useAccount'
import request from '../../../../../../cross/core/uses-cases/request'
import getDataLocalStore from '../../../../../../cross/core/uses-cases/getDataLocalStore'

const useActivity = () => {
  const {account} = useAccount()
  const {id: account_id} = account ?? {}
  const [activity, setActivity] = useState([])

  const updateStateActivity = currentActivity => {
    setActivity(() => currentActivity)
  }

  useEffect(() => {
    if (account_id) {
      request(
        {
          path: `accounts/${account_id}/activity`,
          method: 'GET',
          addHeaders: {
            Authorization: getDataLocalStore('token'),
          },
        },
        updateStateActivity,
      )
    }
  }, [account])

  return {
    activity,
  }
}

export default useActivity
