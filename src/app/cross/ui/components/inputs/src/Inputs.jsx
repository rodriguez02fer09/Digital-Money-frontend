import React from 'react'
import classNames from 'classnames'

import Input from '../../../components/input/index'

const Inputs = ({inputs = [], formData}) => {
  const defaultButton = 'inputs'
  const {register} = formData

  const customClass = classNames(defaultButton)

  return (
    <>
      {inputs.map(input => {
        return <Input {...input} register={register} />
      })}
    </>
  )
}

export default Inputs
