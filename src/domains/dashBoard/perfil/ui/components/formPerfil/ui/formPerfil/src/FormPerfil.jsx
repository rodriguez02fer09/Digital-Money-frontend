'use client'

import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useRouter} from 'next/navigation'

import {toast} from 'react-toastify'

import request from '@domains/cross/core/uses-cases/request'
import getDataLocalStore from '@domains/cross/core/uses-cases/getDataLocalStore'

import CardActivity from '@domains/cross/ui/components/cardActivity/src/CardActivity'
import ProfileForm from '@domains/cross/ui/composite-wrappers/ProfileForm/src/ProfileForm'
import '../../styles/main.scss'

import {profileForm} from '@domains/dashBoard/perfil/ui/components/formPerfil/data/forms/defaul'
import useAccount from '@domains/cross/core/hoocks/useAccount/src/useAccount'

const defaultProfile = 'form-perfil'

const FormPerfil = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const {user: perfil, updateUser} = useAccount()

  const mapProfileToForm = (form, profile) => {
    return form.map(field => {
      const key = field.name

      // Caso especial: Combinar firstname y lastname en name
      if (key === 'name') {
        const fullName = `${profile?.firstname || ''} ${
          profile?.lastname || ''
        }`.trim()
        return {
          ...field,
          value: fullName,
        }
      }

      // Para otros casos: Mapear el valor directamente
      if (profile && profile.hasOwnProperty(key)) {
        return {
          ...field,
          value: String(profile[key]),
        }
      }

      // Retornar el campo original si no hay coincidencia
      return field
    })
  }

  useEffect(() => {}, [perfil])

  const parseName = name => {
    // Eliminar caracteres no alfabéticos y permitir solo letras y espacios
    let cleanedName = name.replace(/[^a-zA-Z\s]/g, '').trim()

    // Verificar que el nombre tenga entre 1 y 2 palabras
    const nameParts = cleanedName.split(' ')

    if (nameParts.length === 1) {
      return {
        firstName: nameParts[0],
        lastName: null,
      }
    } else if (nameParts.length === 2) {
      return {
        firstName: nameParts[0],
        lastName: nameParts[1],
      }
    } else {
      return {
        firstName: null,
        lastName: null,
      }
    }
  }

  const callBackOnSubmit = data => {
    const formatData = {
      ...data,
      ...parseName(data?.name),
      dni: parseInt(data?.dni),
    }
    const {id} = perfil
    request(
      {
        path: `users/${id}`,
        method: 'PATCH',
        addHeaders: {
          Authorization: getDataLocalStore('token'),
        },
        data: formatData,
      },
      updateProfileCallback,
    )
    console.log(formatData)
  }

  const updateProfileCallback = data => {
    toast.success('Perfil actulizado ', {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    })
    updateUser(data)
    console.log(data)
  }

  const router = useRouter()
  return (
    <CardActivity className={defaultProfile} size="ProfileData">
      <ProfileForm
        type="edit"
        callBackOnSubmit={callBackOnSubmit}
        inputs={mapProfileToForm(profileForm, perfil)}
        name="dataPerfilForm"
        className={`${defaultProfile}--form-data`}
      />
    </CardActivity>
  )
}

FormPerfil.displayName = 'FormPerfil'
export default FormPerfil
