import '../styles/desktop.scss'

const UseAvatar = ({username}) => {
  const defaultUser = 'contain-user'
  const {name, lastName} = username

  return (
    <div className={`${defaultUser}`}>
      <p>Hola , </p>
      <p>
        {name} {lastName}
      </p>
    </div>
  )
}
export default UseAvatar
