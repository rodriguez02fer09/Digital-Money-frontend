import React from 'react'
import ReactPaginate from 'react-paginate'
import '../src/main.scss'

const Pagination = ({totalPages, onPageChange}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      onPageChange={({selected}) => onPageChange(selected)}
      pageRangeDisplayed={10}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      disabledClassName="disabled"
    />
  )
}

export default Pagination
