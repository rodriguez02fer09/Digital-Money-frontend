import {format} from 'date-fns'
import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  const defaultDateActivity = 'dateActivity'

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}> $ {amount}</p>
      <p className={`${defaultDateActivity}__date`}>
        <p className="dateActivity__date">
          {new Intl.DateTimeFormat('es-ES', {
            weekday: 'long', // Solo muestra el día de la semana
          }).format(new Date(date))}
        </p>
      </p>
    </div>
  )
}

export default DateActivity
