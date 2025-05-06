import React, {useState} from 'react'

import '../styles/desktop.scss'
import ItemActivity from '@domains/dashBoard/home/ui/components/itemActivity/src/ItemActivity'
import Pagination from '@domains/dashBoard/home/core/hooks/pagination/src/Pagination'

const ListActivity = ({activity = []}) => {
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(0)

  const sortedActivity = [...activity].sort(
    (a, b) => new Date(b.dated) - new Date(a.dated),
  )

  const totalItems = sortedActivity.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  console.log('Total Pages:', totalPages)

  const indexOfFirstItem = currentPage * itemsPerPage
  const currentItems = sortedActivity.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage,
  )

  const shouldHidePagination = window.location.pathname === '/dashBoard/home'

  return (
    <div className="contain-cardList">
      {currentItems.length > 0 ? (
        currentItems.map(item => <ItemActivity activity={item} key={item.id} />)
      ) : (
        <p>No hay actividad disponible</p>
      )}

      {/* Paginación oculta solo en /dashBoard/home */}
      {!shouldHidePagination && totalPages > 1 && (
        <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
export default ListActivity
