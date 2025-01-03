'use client'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'

import CardActivity from '../../../../../../../../cross/ui/components/cardActivity/src/CardActivity'
import ProfileForm from '../../../../../../../../cross/ui/composite-wrappers/ProfileForm /src/ProfileForm'

import '../../styles/main.scss'

import {profileForm} from '../../../data/forms/defaul'
import useProfile from '../../../../../../core/hoocks/useProfile'

const defaultProfile = 'form-perfil'

const FormPerfil = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const {perfil} = useProfile()

  useEffect(() => {}, [perfil])

  const router = useRouter()
  return (
    <CardActivity className={defaultProfile} size="ProfileData">
      <ProfileForm
        type="edit"
        inputs={profileForm}
        name="dataPerfilForm"
        className={`${defaultProfile}--form-data`}
      />
    </CardActivity>
  )
}

FormPerfil.displayName = 'FormPerfil'
export default FormPerfil
