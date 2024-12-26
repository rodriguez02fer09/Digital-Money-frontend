import '../styles/desktop.scss'
import ItemActivity from '../../itemActuvity/'

const ListActivity = () => {
  const activity = [
    {
      account_id: 0,
      amount: 190000000,
      dated: '23-12-2024',
      description: 'transferencia',
      destination: 'Rodrigo',
      id: 1,
      origin: 'Cuenta Principal',
      type: 'Transferencia',
    },
  ]

  return (
    <div className="contain-cardList">
      {activity.map(item => (
        <ItemActivity activity={item} key={item.id} />
      ))}
    </div>
  )
}

export default ListActivity
