import {useEffect, useState} from 'react'

import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'
import updateDataLocalStore from '@domains/cross/core/uses-cases/updateDataLocalStore'

const useProfile = () => {
  const [perfil, setPerfil] = useState(null)

  useEffect(() => {
    if (perfil === null) {
      setPerfil(() => JSON.parse(getDataLocalStore('user')))
    }
  }, [perfil])

  const updateProfile = data => {
    updateDataLocalStore('user', JSON.stringify(data))
    setPerfil(() => data)
  }

  return {
    perfil,
    updateProfile,
  }
}

export default useProfile
