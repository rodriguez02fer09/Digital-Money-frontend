import Image from 'next/image'
import '../styles/main.scss'

// ponerse en modo lectura
// modo edicion
// al dar enter se debe volver a poner en modo lectura y da foco en el input

// enviar el evento al dar enter o salirse del foco

const InputEdit = ({value, placeholder, label, type}) => {
  const defaultClass = 'input-form-edit'

  return (
    <div className={defaultClass}>
      <div className={`${defaultClass}__label`}>
        <label>{label}</label>
      </div>
      <div className={`${defaultClass}__wrapper`}>
        <input
          className={`${defaultClass}__input`}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        <span className={`${defaultClass}__icon`}>
          <Image
            src="/images/pencil.svg"
            alt="Edit Icon"
            width={22}
            height={22}
          />
        </span>
      </div>
    </div>
  )
}

export default InputEdit
