import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({totalPages, onPageChange}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="siguiente >"
      previousLabel="< anterior"
      onPageChange={({selected}) => onPageChange(selected)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      activeClassName="active"
      previousClassName="prev-button"
      nextClassName="next-button"
      disabledClassName="disabled"
    />
  )
}

export default Pagination
