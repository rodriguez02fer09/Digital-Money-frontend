import request from './request'
import getDataLocalStore from './getDataLocalStore'
import {useRouter} from 'next/navigation'

const callBackLogoutAccount = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user_id')
  localStorage.removeItem('acount')

  debugger
  window.location.href = '/'
}

const requestLogoutAccount = () => {
  request(
    {
      path: 'logout',
      method: 'POST',
      addHeaders: {
        Authorization: getDataLocalStore('token'),
      },
    },
    callBackLogoutAccount,
  )
}

export default requestLogoutAccount
