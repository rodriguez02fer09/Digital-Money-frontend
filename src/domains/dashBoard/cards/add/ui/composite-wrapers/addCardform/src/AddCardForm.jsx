import React, {useEffect} from 'react'
import classNames from 'classnames'
import {useForm, FormProvider, useWatch} from 'react-hook-form'
import '../styles/main.scss'
import Input from '@domains/cross/ui/components/input/src/Input'
import Button from '@domains/cross/ui/components/button/src/Button'

const Form = ({inputs = [], name, callBackOnSubmit, callBackOnChange}) => {
  const methods = useForm()
  const {control, handleSubmit} = methods

  // Observamos todos los valores del formulario
  const watchedValues = useWatch({control})

  const defaultClass = 'form-add'
  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    debugger
    callBackOnSubmit(data)
  }

  useEffect(() => {
    callBackOnChange(watchedValues)
  }, [watchedValues])

  return (
    <FormProvider {...methods}>
      <form className={customClass} onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input, index) => (
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
        <Button size="large" label="Continuar" color="green" type="submit" />

        {/* Mostramos valores en tiempo real */}
      </form>
    </FormProvider>
  )
}

export default Form
