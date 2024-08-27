import '../styles/desktop.scss'
import SloganAvatar from '../../sloganAvatar/src/SloganAvatar'

const Avatar = ({name = 'Fernanda', lastName = 'Rodriguez'}) => {
  const username = {name, lastName}

  const defaultAvatar = 'contain-avatar'

  return (
    <div className={`${defaultAvatar}`}>
      <SloganAvatar username={username} />
    </div>
  )
}

export default Avatar
