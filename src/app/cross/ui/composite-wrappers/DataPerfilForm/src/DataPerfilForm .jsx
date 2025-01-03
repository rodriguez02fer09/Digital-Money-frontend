import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'
import Input from '../../../components/input'
import Button from '../../../components/button/src/Button'

const Form = ({type = 'default', inputs = [], name, callBackOnSubmit}) => {
  const methods = useForm() // Inicializamos React Hook Form

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
    [`${defaultClass}--${type}`]: type,
  })

  const onSubmit = data => {
    console.log('Formulario enviado:', data)
    callBackOnSubmit(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={methods.handleSubmit(onSubmit)}>
        {type === 'defualt' &&
          inputs.map((input, index) => (
            <Input
              key={index}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              size={input.size}
              color={input.color}
              registerData={input.registerData}
            />
          ))}

        {type === 'edit' &&
          inputs.map((input, index) => (
            <Input
              key={index}
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

export default Form
