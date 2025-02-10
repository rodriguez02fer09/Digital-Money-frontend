import {format} from 'date-fns'
import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  const defaultDateActivity = 'dateActivity'

  // Validar si la fecha es válida antes de formatearla
  const formatdDate = date
    ? format(new Date(date), 'yyyy-MM-dd')
    : 'Fecha inválida'

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}>{amount}</p>
      <p className={`${defaultDateActivity}__date`}>{formatdDate}</p>
    </div>
  )
}

export default DateActivity
