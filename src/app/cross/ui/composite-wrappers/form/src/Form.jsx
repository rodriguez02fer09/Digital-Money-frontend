import '../styles/desktop.scss'

import React from 'react'
import classNames from 'classnames'
import {useForm} from 'react-hook-form'

import Inputs from '../../../components/inputs/index'
import Button from '../../../../../cross/ui/components/button/src/Button'

const Form = ({formData, inputs = [], name}) => {
  const {register, handleSubmit, watch, formState, getValues} = useForm()

  const {errors} = formState

  const defaultClass = 'form-container'

  const customClass = classNames(defaultClass, {
    [`${defaultClass}--${name}`]: name,
  })

  const onSubmit = data => {
    debugger
    console.log(formState)
    console.log(data)
  }

  return (
    <>
      <form className={customClass} onSubmit={handleSubmit(onSubmit)}>
        <Inputs
          inputs={inputs}
          register={register}
          formData={{
            register,
            watch,
            formState,
          }}
        />
        <Button size={'large'} label={'Crear cuenta'} color={'green'} />
      </form>
    </>
  )
}

export default Form
