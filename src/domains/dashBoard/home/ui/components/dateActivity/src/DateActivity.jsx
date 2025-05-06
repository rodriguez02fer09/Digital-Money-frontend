import {format} from 'date-fns'
import '../styles/desktop.scss'

const DateActivity = ({date, amount}) => {
  return (
    <div className="dateActivity">
      <p className="dateActivity__account">$ {amount}</p>
      <div className="dateActivity__date">
        {new Intl.DateTimeFormat('es-ES', {
          weekday: 'long',
        }).format(new Date(date))}
      </div>
    </div>
  )
}

export default DateActivity
