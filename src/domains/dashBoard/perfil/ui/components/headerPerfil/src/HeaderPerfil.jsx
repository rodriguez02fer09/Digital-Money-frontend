import '../styles/main.scss'
import Image from 'next/image'

const HeaderPerfil = () => {
  const defaulheader = 'header-perfil'
  return (
    <div className={defaulheader}>
      <Image src="/images/arrowBlack.svg" width={14} height={22} alt="Arrow" />
      <p>Perfil</p>
    </div>
  )
}

export default HeaderPerfil
