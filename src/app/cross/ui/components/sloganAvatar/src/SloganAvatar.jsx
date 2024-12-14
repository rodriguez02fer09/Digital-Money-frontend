'use client'
import '../styles/desktop.scss'

const SloganAvatar = account => {
  const FIRSTLATTER = 0
  const {firstname = '', lastname = ''} = account ?? {}
  debugger
  const firstLaterName = firstname?.charAt(FIRSTLATTER).toUpperCase()
  const firstLaterLastName = lastname?.charAt(FIRSTLATTER).toUpperCase()
  const defaultSlogan = 'contain-slogan'
  return (
    <div className={`${defaultSlogan}`}>
      <p>{`${firstLaterName}${firstLaterLastName}`}</p>
    </div>
  )
}

export default SloganAvatar
