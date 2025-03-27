import request from './request'
import getDataLocalStore from './getDataLocalStore'

const callBackLogoutAccount = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user_id')
  localStorage.removeItem('account')
  localStorage.removeItem('email')
  localStorage.removeItem('user')
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
