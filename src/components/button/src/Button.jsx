import '../style/desktop.scss'

const Button = ({type, label, onClick}) => {
  const buttonClassName = 'button'

  return (
    <button
      onClick={onClick}
      className={`${buttonClassName} ${buttonClassName}--${type}`}
    >
      {label}
    </button>
  )
}

export default Button
