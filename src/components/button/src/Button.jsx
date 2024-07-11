import '../style/desktop.scss'

const Button = ({type, label, onClick}) => {
  const defaultButton = 'button'

  return (
    <button
      onClick={onClick}
      className={`${defaultButton} ${defaultButton}--${type}`}
    >
      {label}
    </button>
  )
}

export default Button
