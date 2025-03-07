import {format} from 'date-fns'
import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  const defaultDateActivity = 'dateActivity'

  return (
    <div className={defaultDateActivity}>
      <p className={`${defaultDateActivity}__account`}> $ {amount}</p>
      <p className={`${defaultDateActivity}__date`}>
        {new Intl.DateTimeFormat('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(date))}
      </p>
    </div>
  )
}

export default DateActivity
