import '../../common/conts/colors.scss'
import Button from '../index'

export default {
  component: Button,
  title: 'Button', // El título de tu componente en Storybook
  argTypes: {
    // Control para editar el texto del botón
    type: [
      'large-green',
      'large-black',
      'large-grey',
      'small-green',
      'small-black',
      'small-grey',
    ], // Control para editar el color del botón
  },
}

const Template = args => <Button {...args} />

export const LargeGreen = Template.bind({})
LargeGreen.args = {
  label: 'Botón 1',
  type: 'large-green',
  //dataTestId: 'large-yellow-button'
}

export const LargeBlack = Template.bind({})
LargeBlack.args = {
  label: 'Botón 2',
  type: 'large-black',
}

export const LargeGrey = Template.bind({})
LargeGrey.args = {
  label: 'Botón 3',
  type: 'large-grey',
}

export const SmallGreen = Template.bind({})
SmallGreen.args = {
  label: 'Botón Pequeño 1',
  type: 'small-green',
  // dataTestId: 'small-gray-button'
}
export const SmallBlack = Template.bind({})
SmallBlack.args = {
  label: 'Botón Pequeño 2',
  type: 'small-black',
  // dataTestId: 'small-gray-button'
}
export const SmallGray = Template.bind({})
SmallGray.args = {
  label: 'Botón Pequeño 3',
  type: 'small-grey',
  // dataTestId: 'small-gray-button'
}
