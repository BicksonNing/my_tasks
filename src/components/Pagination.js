import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav aria-label='Page navigation example'>
      <ul className='inline-flex -space-x-px'>
        <li>
          <button
            onClick={prevPage}
            className='py-2 px-3 ml-0 leading-tight text-gray-500 glass rounded-l-lg border border-gray-300 hover:text-black hover:bg-gray-100/10'
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={
                currentPage === pgNumber
                  ? "py-2 px-3 leading-tight text-gray-500 glass-thick border border-gray-300  "
                  : "py-2 px-3 leading-tight text-gray-500 glass border border-gray-300 hover:bg-gray-100/10"
              }
            >
              {pgNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={nextPage}
            className='py-2 px-3 leading-tight text-gray-500 glass rounded-r-lg border border-gray-300 hover:bg-gray-100/10 hover:text-black'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
