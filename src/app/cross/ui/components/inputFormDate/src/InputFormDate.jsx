import {Lavishly_Yours} from 'next/font/google'
import '../styles/desktop.scss'
import Image from 'next/image'

const InputFormDate = ({value, placeholder, label}) => {
  const defaultClass = 'input-form-date'
  return (
    <div className={`${defaultClass}`}>
      <label className={`${defaultClass}__labelForm`}>
        {label}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          className={`${defaultClass}__inputForm`}
        />
      </label>
      <div className={`${defaultClass}__containImage`}>
        <Image
          src="/images/pencil.svg"
          alt="Edit Icon"
          width={22}
          height={22}
        />
      </div>
    </div>
  )
}

export default InputFormDate
