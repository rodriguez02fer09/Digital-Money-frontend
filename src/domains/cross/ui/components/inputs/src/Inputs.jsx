import React from 'react'
import classNames from 'classnames'
import {useFormContext} from 'react-hook-form'

import Input from '../../input/index'

const Inputs = ({inputs}) => {
  const defaultButton = 'inputs'
  const customClass = classNames(defaultButton)

  return (
    <>
      {inputs.map((input, index) => {
        return <Input key={index} {...input} />
      })}
    </>
  )
}

export default Inputs
