import Input from '../index'
import '../styles/desktop.scss'
import '../../../sass/_variables.scss'

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      options: ['large', 'medium'],
      control: {type: 'radio'},
    },
    color: {
      options: ['red', 'blue', 'black'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <Input {...args} />

export const Large = Template.bind({})
Large.args = {
  placeholder: 'Input',
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  placeholder: 'Input',
}

export const Red = Template.bind({})
Red.args = {
  color: 'red',
  placeholder: 'Input',
}

export const Blue = Template.bind({})
Blue.args = {
  color: 'blue',
  placeholder: 'Input',
}

export const Black = Template.bind({})
Black.args = {
  color: 'black',
  placeholder: 'Input',
}
