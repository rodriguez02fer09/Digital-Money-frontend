import '../styles/desktop.scss'
import InputFormDate from '../../../components/inputFormDate'

const ContainFormDatePerfil = ({titleLabel}) => {
  return (
    <div className="contain-form-date-perfil">
      <InputFormDate titleLabel={titleLabel} />
      <InputFormDate titleLabel={titleLabel} />
      <InputFormDate titleLabel={titleLabel} />
      <InputFormDate titleLabel={titleLabel} />
      <InputFormDate titleLabel={titleLabel} />
    </div>
  )
}

export default ContainFormDatePerfil
