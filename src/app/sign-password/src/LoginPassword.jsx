import Link from 'next/link'
import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const LoginPassword = () => {
  const defaulClass = 'mainContainForm-login'
  return (
    <main className={`${defaulClass} `}>
      <div className={`${defaulClass}--containForm-login `}>
        <div className={`${defaulClass}--containtex`}>
          <p>Hola! Ingresá tu contraseña</p>
        </div>
        <div className={`${defaulClass}--containForm`}>
          <Input type="large-Input-black" placeholder={'Contraseña'} />
          <Button type="large-green" label="Continuar" href="/sign-password" />
        </div>
      </div>
    </main>
  )
}

export default LoginPassword
