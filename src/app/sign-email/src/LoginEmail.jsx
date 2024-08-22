import Link from 'next/link'
import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const LoginEmail = ({
  inputColor,
  greetingText,
  inputSize,
  inputPlaceholder,
  buttonSize,
  buttonColor,
  buttonLabel,
  buttonHref,
}) => {
  const defaulClass = 'mainContainForm-email'
  return (
    <main className={`${defaulClass} `}>
      <div className={`${defaulClass}--containFrom `}>
        <div className={`${defaulClass}--containtex`}>
          <p>{'¡Hola! Ingresá tu e-mail'}</p>
        </div>
        <div className={`${defaulClass}--containForm`}>
          <Input
            size={'large'}
            placeholder={'Correo electronico'}
            color={'black'}
          />
          <Link href="/sign-password">
            <Button size={'large'} label={'Continuar'} color={'green'} />
          </Link>

          <Link href="/create-account">
            <Button size={'large'} label={'Crear cuenta'} color={'green'} />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginEmail
