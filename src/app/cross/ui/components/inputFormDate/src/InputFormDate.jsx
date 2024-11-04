import {Lavishly_Yours} from 'next/font/google'
import '../styles/desktop.scss'
import Image from 'next/image'

const InputFormDate = ({value, placeholder, label}) => {
  return (
    <form className="input-form-date">
      <label>
        {label}
        <input type="text" value={value} placeholder={placeholder} />
      </label>
      <Image src="/images/pencil.svg" alt="Edit Icon" width={14} height={22} />
    </form>
  )
}

export default InputFormDate
