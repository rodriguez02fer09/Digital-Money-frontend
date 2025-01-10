import {useState, useEffect} from 'react'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'
import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

const useActivity = ({searchItem = ''}) => {
  const {account} = useAccount()
  const {id: account_id} = account ?? {}
  const [activity, setActivity] = useState([])

  const updateStateActivity = currentActivity => {
    setActivity(() => currentActivity)
  }

  useEffect(() => {
    if (account_id) {
      const filterItem = searchItem ? `?search=${searchItem}` : ''
      request(
        {
          path: `accounts/${account_id}/${filterItem}`,
          method: 'GET',
          addHeaders: {
            Authorization: getDataLocalStore('token'),
          },
        },
        updateStateActivity,
      )
    }
  }, [account, searchItem])

  return {
    activity,
  }
}

export default useActivity
