import '../styles/desktop.scss'
import Image from 'next/image'
import Button from '../../../components/button/src/Button'
import ImgCheck from '../../../../public/images/check.svg'

const SuccessResgister = () => {
  const defaullSuccess = 'main-successRegister'

  return (
    <main className={`${defaullSuccess}`}>
      <div className={`${defaullSuccess}--contain-successRegister`}>
        <div className={`${defaullSuccess}--contain-info`}>
          <p>Registro Exitoso</p>
          <ImgCheck alt="Logo" width={92} height={95} />

          <p>
            Hemos enviado un correo de confirmación para validar tu email, por
            favor revisalo para iniciar sesión
          </p>
        </div>
        <div className={`${defaullSuccess}--containButton`}>
          <Button
            size={'large'}
            color={'green'}
            label="Continuar"
            href="/sign-email"
          />
        </div>
      </div>
    </main>
  )
}
export default SuccessResgister
