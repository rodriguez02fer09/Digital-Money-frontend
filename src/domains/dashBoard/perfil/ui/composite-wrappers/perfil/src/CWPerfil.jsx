'use client'
import './styles/desktop.scss'
import HeaderPerfil from '@domains/dashBoard/perfil/ui/components/headerPerfil/src/HeaderPerfil'
import FormPerfil from '@domains/dashBoard/perfil/ui/components/formPerfil/ui/formPerfil/src/FormPerfil'
import ButtonProfile from '@domains/dashBoard/perfil/ui/components/buttonProfile/src/ButtonProfile'
import TransferenciaProfile from '@domains/dashBoard/perfil/ui/components/transferenciaProfile/src/TransferenciaProfile'

const CWPerfil = () => {
  return (
    <>
      <HeaderPerfil />
      <FormPerfil />
      <ButtonProfile />
      <TransferenciaProfile />
    </>
  )
}

export default CWPerfil
