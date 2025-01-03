import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'
import InputEdit from '../../../components/inputEdit'
import Button from '../../../components/button/src/Button'

const ProfileForm = ({inputs = [], name, callBackOnSubmit}) => {
  const methods = useForm() // Inicializamos React Hook Form

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    console.log('Formulario enviado:', data)
    callBackOnSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={methods.handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <InputEdit
            key={index}
            value={input.value}
            label={input.label}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            size={input.size}
            color={input.color}
            registerData={input.registerData}
          />
        ))}
      </form>
    </FormProvider>
  )
}

export default ProfileForm
