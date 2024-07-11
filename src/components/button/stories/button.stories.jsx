import '../style/desktop.scss'
import Button from '../index'

export default {
  component: Button,
  title: 'Button', // El título de tu componente en Storybook
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'large-green',
          'large-black',
          'large-grey',
          'small-green',
          'small-black',
          'small-grey',
        ],
      },
    },
  },
}

const Template = args => <Button {...args} />

export const LargeGreen = Template.bind({})
LargeGreen.args = {
  label: 'Botón',
  type: 'large-green',
  // dataTestId: 'large-yellow-button',
}

export const LargeBlack = Template.bind({})
LargeBlack.args = {
  label: 'Botón',
  type: 'large-black',
}

export const LargeGrey = Template.bind({})
LargeGrey.args = {
  label: 'Botón',
  type: 'large-grey',
}

export const SmallGreen = Template.bind({})
SmallGreen.args = {
  label: 'Botón Small',
  type: 'small-green',
  // dataTestId: 'small-gray-button',
}

export const SmallBlack = Template.bind({})
SmallBlack.args = {
  label: 'Botón Small',
  type: 'small-black',
  // dataTestId: 'small-gray-button',
}

export const SmallGray = Template.bind({})
SmallGray.args = {
  label: 'Small',
  type: 'small-grey',
  // dataTestId: 'small-gray-button',
}
export const ButtonResponsive = Template.bind({})
ButtonResponsive.args = {
  label: 'Botón Responsive',
  type: 'boton-responsive',
  // dataTestId: 'small-gray-button',
}
export const ButtonResponsiveSmall = Template.bind({})
ButtonResponsiveSmall.args = {
  label: 'Botón Responsive small',
  type: 'boton-responsive-small',
  // dataTestId: 'small-gray-button',
}
export const buttonSecondary = Template.bind({})
buttonSecondary.args = {
  label: 'Botón 2',
  type: 'button-secondary',
  // dataTestId: 'small-gray-button',
}

export const buttonFilter = Template.bind({})
buttonFilter.args = {
  label: 'button-filter',
  type: 'button-filter',
  // dataTestId: 'small-gray-button',
}
export const buttonApply = Template.bind({})
buttonApply.args = {
  label: 'button-Apply ',
  type: 'button-Apply ',
  // dataTestId: 'small-gray-button',
}
