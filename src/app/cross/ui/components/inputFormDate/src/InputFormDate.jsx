import Image from 'next/image'
import classNames from 'classnames'
import '../styles/desktop.scss'

const InputFormDate = ({value, placeholder, label}) => {
  const defaultClass = 'input-form-date'

  return (
    <div className={`${defaultClass}`}>
      <label className={`${defaultClass}__labelForm`}>{label}</label>
      <div className={`${defaultClass}__containInputImg`}>
        <input type="text" value={value} placeholder={placeholder} />
        <Image
          src="/images/pencil.svg"
          alt="Edit Icon"
          width={14}
          height={22}
        />
      </div>
    </div>
  )
}

export default InputFormDate
