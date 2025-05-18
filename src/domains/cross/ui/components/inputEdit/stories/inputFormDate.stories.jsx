import React from 'react'
import InputFormDate from '../index'
import '../styles/desktop.scss'
@use '../../../../sass/variables.scss';


export default {
  component: InputFormDate,
  title: 'Components/InputFormDate',
  argTypes: {
    size: {
      options: ['mobile', 'tablet', 'desktop'], // Corregido la coma faltante
      control: {type: 'radio'},
    },
    color: {
      options: ['white'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <InputFormDate {...args} />

export const Mobile = Template.bind({})
Mobile.args = {
  placeholder: 'InputFormDate',
  size: 'mobile', // Establecido el tamaño en mobile
  label: 'label',
}

export const Tablet = Template.bind({})
Tablet.args = {
  placeholder: 'InputFormDate',
  size: 'tablet', // Establecido el tamaño en tablet
  label: 'label',
}

export const Desktop = Template.bind({})
Desktop.args = {
  placeholder: 'InputFormDate',
  size: 'desktop', // Establecido el tamaño en desktop
  label: ' label',
}
