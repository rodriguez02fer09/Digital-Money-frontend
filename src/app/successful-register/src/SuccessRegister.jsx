'use client'
import '../styles/desktop.scss'
import Image from 'next/image'
import {useContext} from 'react'
import {UserContext} from '../../../Context/index'
import Button from '../../../components/button/src/Button'
import ImgCheck from '../../../../public/images/check.svg' // Usa la ruta correcta para la imagen SVG
import {useRouter} from 'next/navigation'

const SuccessRegister = () => {
  const {credencials, setCredencials} = useContext(UserContext)

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
          <Image src={ImgCheck} alt="Logo" width={92} height={95} />

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
