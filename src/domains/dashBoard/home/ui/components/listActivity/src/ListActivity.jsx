import '../styles/desktop.scss'

import ItemActivity from '@domains/DashBoard/home/ui/components/itemActuvity/src/ItemActivity'

const ListActivity = ({activity = []}) => {
  return (
    <div className="contain-cardList">
      {activity.map(item => (
        <ItemActivity activity={item} key={item.id} />
      ))}
    </div>
  )
}

export default ListActivity
