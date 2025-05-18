import '../../../../sass/variables.scss'
import '../style/desktop.scss'
import Button from '../index'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    size: {
      options: [
        'large',
        'sign-up',
        'create-acount',
        'medium',
        'button-activity',
        'button-arrow',
      ],
      control: {type: 'radio'},
    },
    color: {
      options: ['green', 'black', 'grey'],
      control: {type: 'radio'},
    },
  },
}

const Template = args => <Button {...args} />

export const Green = Template.bind({})
Green.args = {
  label: 'Botón',
  color: 'green',
}

export const Black = Template.bind({})
Black.args = {
  label: 'Botón',
  color: 'black',
}

export const Grey = Template.bind({})
Grey.args = {
  label: 'Botón',
  color: 'grey',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Botón Small',
  size: 'large',
}

export const Medium = Template.bind({})
Medium.args = {
  label: 'Botón Small',
  size: 'medium',
}

export const SignUp = Template.bind({})
SignUp.args = {
  label: 'Botón Small',
  size: 'sign-up',
}

export const LogIn = Template.bind({})
LogIn.args = {
  label: 'Botón Small',
  size: 'logIn',
}

export const CreateAcount = Template.bind({})
CreateAcount.args = {
  label: 'Botón Small',
  size: 'create-acount',
}

export const ButtonActivity = Template.bind({})
ButtonActivity.args = {
  label: 'button-activity',
  size: 'button-activity',
}

export const ButtonArrow = Template.bind({})
ButtonArrow.args = {
  label: 'button-arrow',
  size: 'button-arrow',
}
