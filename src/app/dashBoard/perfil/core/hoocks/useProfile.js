import {useEffect, useState} from 'react'

import getDataLocalStore from '../../../../cross/core/uses-cases/getDataLocalStore'

const useProfile = () => {
  const [perfil, setPerfil] = useState(null)

  useEffect(() => {
    if (perfil === null) {
      setPerfil(() => JSON.parse(getDataLocalStore('user')))
    }
  }, [perfil])

  return {
    perfil,
  }
}

export default useProfile
