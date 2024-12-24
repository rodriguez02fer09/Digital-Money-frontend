'use client'
import './styles/desktop.scss'

import MenuDesplegable from '../../../../../cross/ui/components/menuDesplegable'

const CWDasboard = () => {
  const defaultClass = 'dashboard'

  return (
    <main className={`${defaultClass}`}>
      <div className={`${defaultClass}__layout`}>
        <div className={`${defaultClass}__containMenuDesplegable`}>
          <MenuDesplegable />
        </div>
      </div>
    </main>
  )
}

export default CWDasboard
