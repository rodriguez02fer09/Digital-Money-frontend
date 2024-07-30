import Link from 'next/link'
import '../styles/desktop.scss'
import ContainFormResgister from '../../../components/containFormRegister/src/ContainFormResgister'

const LoginPassword = ({
  greetingText,
  inputType,
  placeholder,
  label,
  buttonHref,
}) => {
  return (
    <ContainFormResgister
      greetingText="Ingresá tu contraseña"
      inputType="large-Input-black"
      inputPlaceholder="Contraseña"
      buttonType="large-green"
      buttonLabel="Continuar"
      buttonHref="/"
    />
  )
}

export default LoginPassword
