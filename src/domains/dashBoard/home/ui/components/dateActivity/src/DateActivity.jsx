import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  const defaultDateActivity = 'dateActivity'

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}>{amount}</p>
      <p className={`${defaultDateActivity}__date`}>{date}</p>
    </div>
  )
}

export default DateActivity
