import Footer from '../index'
import '../styles/desktop.scss'

export default {
  component: Footer,
  title: 'Footer',
  argTypes: {
    color: {
      options: ['green', 'black'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <Footer {...args} />

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}

export const Black = Template.bind({})
Black.args = {
  type: 'black',
}
