import '../styles/desktop.scss'
import Header from '../index'

export default {
  component: Header,
  title: 'Header',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['header-home', 'login-header'],
      },
    },
  },
}

const Template = args => <Header {...args} />

export const headerHome = Template.bind({})
headerHome.args = {
  type: 'header-home',
}

export const loginHeader = Template.bind({})
loginHeader.args = {
  type: 'login-header',
}
