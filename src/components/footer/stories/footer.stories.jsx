import Footer from '../index'
import '../styles/desktop.scss'

export default {
  component: Footer,
  title: 'Footer',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['footer-home', 'footer-login'],
      },
    },
  },
}

const Template = args => <Footer {...args} />

export const footerHome = Template.bind({})
footerHome.args = {
  type: 'footer-home',
}

export const footerLogin = Template.bind({})
footerLogin.args = {
  type: 'footer-login',
}
