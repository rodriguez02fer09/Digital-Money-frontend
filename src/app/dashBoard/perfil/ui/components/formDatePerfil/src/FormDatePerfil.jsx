'use client'
import '../styles/main.scss'
import CardActivity from '../../../../../../cross/ui/components/cardActivity/src/CardActivity'
import ContainFormDatePerfil from '../../../../../../cross/ui/composite-wrappers/containFormDatePerfil/src/ContainFormDatePerfil'

const defaultProfile = 'form-perfil'

const FormDatePerfil = () => {
  return (
    <div className={defaultProfile}>
      <CardActivity size="ProfileData">
        <ContainFormDatePerfil />
      </CardActivity>
    </div>
  )
}

export default FormDatePerfil
