'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import Button from '../../../domains/cross/ui/components/button/index'
import ImgCheck from '../../../../public/images/add.svg'
import {useRouter} from 'next/navigation'

const SuccessRegister = () => {
  const router = useRouter()

  const handleSucces = () => {
    router.push('/sign-email')
  }

  const defaultSuccess = 'main-successRegister'

  return (
    <main className={`${defaultSuccess}`}>
      <div className={`${defaultSuccess}--contain-successRegister`}>
        <div className={`${defaultSuccess}--contain-info`}>
          <p>Registro Exitoso</p>

          <p>
            Hemos enviado un correo de confirmación para validar tu email, por
            favor revísalo para iniciar sesión.
          </p>
        </div>
        <div className={`${defaultSuccess}--containButton`}>
          <Button
            size="large"
            color="green"
            label="Continuar"
            onClick={handleSucces}
          />
        </div>
      </div>
    </main>
  )
}

export default SuccessRegister
