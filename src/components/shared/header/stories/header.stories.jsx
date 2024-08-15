import '../styles/desktop.scss'
import Header from '../index'

export default {
  component: Header,
  title: 'Header',
  argTypes: {
    color: {
      options: ['green', 'black'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <Header {...args} />

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}

export const Black = Template.bind({})
Black.args = {
  type: 'black',
}
