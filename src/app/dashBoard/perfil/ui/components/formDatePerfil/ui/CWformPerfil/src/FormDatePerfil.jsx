'use client'
import '../../../ui/styles/main.scss'
import {useRouter} from 'next/navigation'
import CardActivity from '../../../../../../../../cross/ui/components/cardActivity/src/CardActivity'
import Form from '../../../../../../../../cross/ui/composite-wrappers/DataPerfilForm/src/DataPerfilForm '
import {useForm} from 'react-hook-form'
import {profileForm} from '../../../data/forms/defaul'

const defaultProfile = 'form-perfil'

const FormDatePerfil = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const router = useRouter()
  return (
    <CardActivity className={defaultProfile} size="ProfileData">
      <Form
        type="edit"
        inputs={profileForm}
        name="dataPerfilForm"
        className={`${defaultProfile}--form-data`}
      />
    </CardActivity>
  )
}

FormDatePerfil.displayName = 'FormDatePerfil'
export default FormDatePerfil
