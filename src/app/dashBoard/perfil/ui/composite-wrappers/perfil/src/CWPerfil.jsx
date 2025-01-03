'use client'
import './styles/desktop.scss'
import HeaderPerfil from '../../../components/headerPerfil/src/HeaderPerfil'
import FormDatePerfil from '../../../components/formDatePerfil/ui/CWformPerfil/src/FormDatePerfil'
import ButtonProfile from '../../../components/buttonProfile/src/ButtonProfile'
import TransferenciaProfile from '../../../components/transferenciaProfile/src/TransferenciaProfile'

const CWPerfil = () => {
  return (
    <>
      <HeaderPerfil />
      <FormDatePerfil />
      <ButtonProfile />
      <TransferenciaProfile />
    </>
  )
}

export default CWPerfil
