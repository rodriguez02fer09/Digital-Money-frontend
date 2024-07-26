import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const LoginEmail = () => {
  const defaulClass = 'mainContainForm-login'
  return (
    <main className={`${defaulClass} `}>
      <div className={`${defaulClass}--containEmail-login `}>
        <div className={`${defaulClass}--containtex`}>
          <p>Hola! Ingresá tu e-mail</p>
        </div>
        <div className={`${defaulClass}--containForm`}>
          <Input type="large-Input-black" placeholder={'Correo electronico'} />
          <Button type="large-green" label="Continuar" href="/sign-password" />
          <Button type="large-black" label="Crear cuenta" />
        </div>
      </div>
    </main>
  )
}

export default LoginEmail
