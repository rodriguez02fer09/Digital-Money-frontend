import '../styles/desktop.scss'

const DateActivity = () => {
  const defaultDateActivity = 'dateActivity'

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}>-$ 1265,57</p>
      <p className={`${defaultDateActivity}__date`}>Sábado</p>
    </div>
  )
}

export default DateActivity
