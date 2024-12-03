import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'

import Input from '../../../components/input'
import Button from '../../../components/button/src/Button'

const Form = ({inputs = [], name, callBackOnSubmit}) => {
  const methods = useForm() // Inicializamos React Hook Form

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    console.log('Formulario enviado:', data)
    callBackOnSubmit(data) // Llamamos al callback pasado como prop
  }

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={methods.handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            size={input.size}
            color={input.color}
            registerData={input.registerData} // Pasamos las validaciones individuales
          />
        ))}
        <Button size="large" label="Continuar" color="green" type="submit" />
      </form>
    </FormProvider>
  )
}

export default Form
