import '../styles/desktop.scss'

const CardOptions = ({options = []}) => {
  return (
    <ul className="card-options">
      {options?.map(({text = '', link = '#'}) => {
        return (
          <li>
            <a href={link}>{text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default CardOptions
