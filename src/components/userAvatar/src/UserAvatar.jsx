import '../styles/desktop.scss'

const UseAvatar = ({username}) => {
  const defaultUser = 'contain-user'
  const {firstname = '', lastName = ''} = username ?? {}

  return (
    <div className={`${defaultUser}`}>
      <p>Hola , </p>

      <p>
        {firstname} {lastName}
      </p>
    </div>
  )
}
export default UseAvatar
