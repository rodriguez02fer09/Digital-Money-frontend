'use client'
import './styles/desktop.scss'

import FormPerfil from '@domains/dashBoard/perfil/ui/components/formPerfil/ui/formPerfil/src/FormPerfil'
import ButtonProfile from '@domains/dashBoard/perfil/ui/components/buttonProfile/src/ButtonProfile'
import TransferenciaProfile from '@domains/dashBoard/perfil/ui/components/transferenciaProfile/src/TransferenciaProfile'
import MobileHeader from '@domains/cross/ui/components/MobileHeader/src/MobileHeader'

const CWPerfil = ({title}) => {
  return (
    <>
      <MobileHeader title="Perfil" />
      <FormPerfil />
      <ButtonProfile />
      <TransferenciaProfile />
    </>
  )
}

export default CWPerfil
