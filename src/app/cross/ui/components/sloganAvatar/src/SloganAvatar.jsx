'use client'

import '../styles/desktop.scss'

const SloganAvatar = ({}) => {
  // const FIRSTLATTER = 0
  // const {firstname = '', lastName = ''} = username ?? {}

  // const firstLaterName = name?.charAt(FIRSTLATTER)
  // const firstLaterLastName = lastName?.charAt(FIRSTLATTER)
  const defaultSlogan = 'contain-slogan'
  return (
    <div className={`${defaultSlogan}`}>
      <p>
        {/* {firstLaterName}
        {firstLaterLastName} */}
        FR
      </p>
    </div>
  )
}

export default SloganAvatar
