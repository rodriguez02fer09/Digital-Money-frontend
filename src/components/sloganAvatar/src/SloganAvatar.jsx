import '../styles/desktop.scss'

const SloganAvatar = ({username}) => {
  const FIRSTLATTER = 0
  const {name, lastName} = username

  const firstLaterName = name?.charAt(FIRSTLATTER)
  const firstLaterLastName = lastName?.charAt(FIRSTLATTER)
  const defaultSlogan = 'contain-slogan'
  return (
    <div className={`${defaultSlogan}`}>
      <p>
        {firstLaterName}
        {firstLaterLastName}
      </p>
    </div>
  )
}

export default SloganAvatar
