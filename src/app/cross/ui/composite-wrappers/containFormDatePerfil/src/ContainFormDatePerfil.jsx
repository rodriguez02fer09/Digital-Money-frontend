import '../styles/desktop.scss'
import InputFormDate from '../../../components/InputFormDate'
import Image from 'next/image'

const ContainFormDatePerfil = () => {
  return (
    <div className="contain-form-date-perfil">
      <InputFormDate label="Email" />
      <InputFormDate label="Nombre y apellido" />
      <InputFormDate label="CUIT" />
      <InputFormDate label="Telefono" />
      <InputFormDate label="Contraseña" />
    </div>
  )
}

export default ContainFormDatePerfil
