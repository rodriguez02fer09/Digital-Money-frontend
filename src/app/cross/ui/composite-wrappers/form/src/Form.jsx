import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm, FormProvider} from 'react-hook-form'

import Input from '../../../components/input'
import Button from '../../../../../cross/ui/components/button/src/Button'

const Form = ({formData, inputs = [], name, callBackOnSubmit}) => {
  const methods = useForm()

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    console.log(data)
    callBackOnSubmit(data)
  }

  return (
    <>
      <FormProvider {...methods}>
        <form className={customClass} onSubmit={methods.handleSubmit(onSubmit)}>
          <Input inputs={inputs} />
          <Button size={'large'} label={'Crear cuenta'} color={'green'} />
        </form>
      </FormProvider>
    </>
  )
}

export default Form
