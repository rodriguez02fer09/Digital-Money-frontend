import React from 'react'
import ReactPaginate from 'react-paginate'
import '../src/main.scss'

const Pagination = ({totalPages, onPageChange}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="siguiente >"
      previousLabel="< anterior"
      onPageChange={({selected}) => onPageChange(selected)}
      pageRangeDisplayed={10}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      previousClassName="prev-button"
      nextClassName="next-button"
      disabledClassName="disabled"
    />
  )
}

export default Pagination
