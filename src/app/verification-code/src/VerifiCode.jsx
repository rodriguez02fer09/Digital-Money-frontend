import '../styles/desktop.scss'
import ContainFormResgister from '../../../components/containFormRegister/src/ContainFormResgister'
const VerifiCode = ({
  greetingText,
  inputType,
  placeholder,
  label,
  buttonHref,
}) => {
  return (
    <ContainFormResgister
      greetingText="Ingresá el código de verificación"
      inputType="large-Input-black"
      inputPlaceholder="Codigo"
      buttonType="large-green"
      buttonLabel="Continuar"
      buttonHref="/"
    />
  )
}
export default VerifiCode
