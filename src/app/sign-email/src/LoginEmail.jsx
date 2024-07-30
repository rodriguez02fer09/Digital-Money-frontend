// src/components/LoginEmail/LoginEmail.js
import '../styles/desktop.scss' // Import styles
import ContainFormResgister from '../../../components/containFormRegister/src/ContainFormResgister'

const LoginEmail = ({
  greetingText,
  inputType,
  placeholder,
  label,
  buttonHref,
}) => {
  return (
    <ContainFormResgister
      greetingText="¡Hola! Ingresá tu e-mail"
      inputType="large-Input-black"
      inputPlaceholder="Correo electronico"
      buttonType="large-green"
      buttonLabel="Continuar"
      buttonHref="/sign-password"
    />
  )
}

export default LoginEmail
