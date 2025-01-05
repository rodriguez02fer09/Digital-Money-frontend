import {useState, useEffect} from 'react'
import useAccount from '../../../../../../domains/cross/core/hoocks/useAccount/src/useAccount'
import request from '../../../../../../domains/cross/core/uses-cases/request'
import getDataLocalStore from '../../../../../../domains/cross/core/uses-cases/getDataLocalStore'

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
