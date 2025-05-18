import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import {useForm, FormProvider, useWatch} from 'react-hook-form'
import '../styles/main.scss'
import Input from '@domains/cross/ui/components/input/src/Input'
import Button from '@domains/cross/ui/components/button/src/Button'

const Form = ({inputs = [], name, callBackOnSubmit, callBackOnChange}) => {
  const methods = useForm()
  const {control, handleSubmit} = methods
  const [focusedField, setFocusedField] = useState(null)

  // Observamos todos los valores del formulario
  const watchedValues = useWatch({control})

  const defaultClass = 'form-add'
  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    callBackOnSubmit(data)
  }

  useEffect(() => {
    if (callBackOnChange) {
      callBackOnChange(watchedValues, focusedField)
    }
  }, [watchedValues, focusedField, callBackOnChange])

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
            onFocus={() => setFocusedField(input.name)}
          />
        ))}
        <Button size="large" label="Continuar" color="green" type="submit" />
      </form>
    </FormProvider>
  )
}

export default Form
