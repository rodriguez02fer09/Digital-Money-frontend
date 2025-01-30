import {format} from 'date-fns'
import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  const defaultDateActivity = 'dateActivity'

  // Formatear la fecha en formato año-mes-día
  const formattedDate = format(new Date(date), 'yyyy-MM-dd')

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}>{amount}</p>
      <p className={`${defaultDateActivity}__date`}>{formattedDate}</p>
    </div>
  )
}

export default DateActivity
