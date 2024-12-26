import {useState, useEffect} from 'react'
import useAccount from '../../../../../cross/core/hoocks/useAccount/src/useAccount'
import request from '../../../../../cross/core/uses-cases/request'
import getDataLocalStore from '../../../../../cross/core/uses-cases/getDataLocalStore'

const useTransactions = () => {
  const {account} = useAccount()
  const {id: account_id} = account ?? {}
  const {transactions, setTransactions} = useState([])

  useEffect(() => {
    request(
      {
        path: `accounts/${account_id}/activity`,
        method: 'GET',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
      },
      data => {
        setTransactions(data)
      },
    )
  }, [account])

  return {
    transactions,
  }
}

export default useTransactions
