import '../styles/desktop.scss'
import Image from 'next/image'

const InputFormDate = ({titleLabel, value, placeholder, onChange}) => {
  return (
    <form className="input-form-date">
      <label>
        {titleLabel}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>

      <Image src="/images/pencil.svg" alt="Edit Icon" width={14} height={22} />
    </form>
  )
}

export default InputFormDate
