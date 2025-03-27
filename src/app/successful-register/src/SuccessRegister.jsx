'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import Button from '@domains/cross/ui/components/button/index'

import {useRouter} from 'next/navigation'

const SuccessRegister = () => {
  const router = useRouter()

  const handleSuccess = () => {
    router.push('/account/sign-email') // Agregué / al inicio para ruta absoluta
  }

  const defaultSuccess = 'main-successRegister'

  return (
    <main className={`${defaultSuccess}`}>
      <div className={`${defaultSuccess}--contain-successRegister`}>
        <div className={`${defaultSuccess}--contain-info`}>
          <p className={`${defaultSuccess}--title`}>Registro Exitoso</p>
          <p className={`${defaultSuccess}--message`}>
            Hemos enviado un correo de confirmación para validar tu email, por
            favor revísalo para iniciar sesión.
          </p>
          <div className={`${defaultSuccess}__contain-image`}>
            <Image src="/images/check.svg" alt="Logo" width={92} height={95} />
          </div>
        </div>
        <div className={`${defaultSuccess}--containButton`}>
          <Button
            size="large"
            color="green"
            label="Continuar"
            onClick={handleSuccess}
            className={`${defaultSuccess}--button`}
          />
        </div>
      </div>
    </main>
  )
}

export default SuccessRegister
