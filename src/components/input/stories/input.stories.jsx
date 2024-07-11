import Input from '../index'

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'large-Input-red',
          'large-Input-blue',
          'large-Input-black',
          'small-Input-red',
          'small-Input-blue',
          'small-Input-black',
        ],
      },
    },
  },
}

const Template = args => <Input {...args} />

export const largeInputRed = Template.bind({})
largeInputRed.args = {
  type: 'large-Input-red',
  value: '',
  label: '',
}

export const largeInputBlue = Template.bind({})
largeInputBlue.args = {
  type: 'large-Input-blue',
  value: '',
  label: '',
}

export const largeInputBlack = Template.bind({})
largeInputBlack.args = {
  type: 'large-Input-black',
  value: '',
  label: '',
}

export const SmallInputRed = Template.bind({})
SmallInputRed.args = {
  type: 'small-Input-red',
  value: '',
  label: '',
}

export const SmallInputBlue = Template.bind({})
SmallInputBlue.args = {
  type: 'small-Input-blue',
  value: '',
  label: '',
}

export const SmallInputBlack = Template.bind({})
SmallInputBlack.args = {
  type: 'small-Input-black',
  value: '',
  label: '',
}
