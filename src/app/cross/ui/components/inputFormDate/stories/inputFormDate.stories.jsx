import React from 'react'
import InputFormDate from '../index'
import '../styles/desktop.scss'
import '../../../../sass/_variables.scss'

export default {
  component: InputFormDate,
  title: 'Components/InputFormDate',
  argTypes: {
    size: {
      options: ['small', 'large'], // Eliminar el comentario
      control: {type: 'radio'},
    },
    color: {
      options: ['white'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <InputFormDate {...args} />

export const small = Template.bind({})
small.args = {
  placeholder: 'InputFormDate',
  size: 'small',
  label: 'label',
}
