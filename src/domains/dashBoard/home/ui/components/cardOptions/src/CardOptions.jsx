import '../styles/desktop.scss'

const CardOptions = ({options = []}) => {
  return (
    <ul className="card-options">
      {options?.map(({text = '', link = '#'}, index) => {
        return (
          <li key={index}>
            <a href={link}>{text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default CardOptions
