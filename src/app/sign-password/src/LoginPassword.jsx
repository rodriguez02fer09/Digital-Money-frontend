import Link from 'next/link'
import '../styles/desktop.scss'
import Input from '../../../components/input/src/Input'
import Button from '../../../components/button/src/Button'

const LoginPassword = ({}) => {
  const defaulClass = 'mainContainForm-password'
  return (
    <main className={`${defaulClass} `}>
      <div className={`${defaulClass}--containFrom `}>
        <div className={`${defaulClass}--containtex`}>
          <p>{'Ingresá tu contraseña'}</p>
        </div>
        <div className={`${defaulClass}--containForm`}>
          <Input size={'large'} placeholder={'Contraseña'} color={'black'} />
          <Link href="/">
            <Button size={'large'} label={'Continuar'} color={'green'} />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginPassword
