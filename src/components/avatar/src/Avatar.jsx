import '../styles/desktop.scss'
import SloganAvatar from '../../sloganAvatar/src/SloganAvatar'
import UserAvatar from 'app/components/userAvatar'
import {useContext} from 'react'
import {UserContext} from '../../../Context/index'

const Avatar = username => {
  const {name = '', lastName = ''} = username ?? {}

  const {account, setAccount} = useContext(UserContext)

  const defaultAvatar = 'contain-avatar'

  return (
    <div className={`${defaultAvatar}`}>
      <SloganAvatar username={username} />
      <UserAvatar username={username} />
    </div>
  )
}

export default Avatar
