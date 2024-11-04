import InputFormDate from '../index'
import '../styles/desktop.scss'
import '../../../../sass/_variables.scss'

export default {
  component: InputFormDate,
  title: 'InputFormDate',
  argTypes: {
    inputs: [],
  },
}

const Template = args => <Inputs {...args} />

export const Default = Template.bind({})
Default.args = {}
