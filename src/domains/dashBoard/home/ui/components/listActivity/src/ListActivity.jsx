import React, {useState} from 'react'
import '../styles/desktop.scss'
import ItemActivity from '@domains/DashBoard/home/ui/components/itemActuvity/src/ItemActivity'
import Pagination from '@domains/dashBoard/home/core/hooks/pagination/src/Pagination'

const ListActivity = () => {
  const activity = [
    {id: 1, name: 'Transferencia a Ana'},
    {id: 2, name: 'Pago de tarjeta'},
    {id: 3, name: 'Depósito recibido'},
    {id: 4, name: 'Compra en tienda'},
    {id: 5, name: 'Pago de servicios'},
    {id: 6, name: 'Retiro de cajero'},
    {id: 7, name: 'Transferencia a Pedro'},
    {id: 8, name: 'Pago de suscripción'},
    {id: 9, name: 'Compra en línea'},
    {id: 10, name: 'Ingreso de nómina'},
    {id: 11, name: 'Pago de renta'},
    {id: 12, name: 'Compra de supermercado'},
  ]
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(0)

  const totalItems = activity.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  console.log('Total Pages:', totalPages)

  const indexOfFirstItem = currentPage * itemsPerPage
  const currentItems = activity.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage,
  )

  return (
    <div className="contain-cardList">
      {currentItems.length > 0 ? (
        currentItems.map(item => <ItemActivity activity={item} key={item.id} />)
      ) : (
        <p>No hay actividad disponible</p>
      )}

      {totalPages > 1 ? (
        <>
          <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      ) : (
        <p>Sin paginación</p>
      )}
    </div>
  )
}

export default ListActivity
