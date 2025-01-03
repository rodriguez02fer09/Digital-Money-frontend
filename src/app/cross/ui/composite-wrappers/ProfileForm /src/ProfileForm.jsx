import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'
import InputEdit from '../../../components/inputEdit'
import Button from '../../../components/button/src/Button'

const ProfileForm = ({inputs = [], name, callBackOnSubmit}) => {
  const methods = useForm()
  const {handleSubmit, setValue} = methods

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    callBackOnSubmit(data)
  }

  const handleInputBlur = (name, value) => {
    setValue(name, value)
    handleSubmit(onSubmit)()
  }

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={handleSubmit(onSubmit)}>
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
            onBlur={e => handleInputBlur(e.target.name, e.target.value)}
          />
        ))}
      </form>
    </FormProvider>
  )
}

export default ProfileForm
