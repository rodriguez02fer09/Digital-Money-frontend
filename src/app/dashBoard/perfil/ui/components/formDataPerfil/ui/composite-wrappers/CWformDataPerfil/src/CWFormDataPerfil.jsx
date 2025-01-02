import '../styles/desktop.scss'
import InputFormDate from '../../../../components/InputFormDate'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import {formDatePerfil} from '../../../../data/forms/defaul'

const CWformDataPerfil = () => {
  return (
    <div className="contain-form-date-perfil">
      <Form
        callBackOnSubmit={callBackOnSubmit}
        inputs={formDatePerfil}
        name="FormDataPerfil"
        className={`${defaultClass}--FormDataPefil`}
      />
    </div>
  )
}

export default ContainFormDatePerfil
