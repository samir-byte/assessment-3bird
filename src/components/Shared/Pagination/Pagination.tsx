import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface PaginationProps {
  currentPage?: number
  totalResults: number
  resultsPerPage?: number
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalResults,
  resultsPerPage = 10
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : currentPage

  const totalPages = Math.ceil(totalResults / resultsPerPage)

  const handlePageChange = (page: number) => {
    setSearchParams(prevSearchParams => {
      prevSearchParams.set('page', String(page))
      return prevSearchParams
    })
  }

  const visiblePages = () => {
    const pageNumbers = []
    const MAX_VISIBLE_PAGES = 9

    if (totalPages <= MAX_VISIBLE_PAGES) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      const firstPage = Math.max(1, pageNumber - 4)
      const lastPage = Math.min(totalPages, pageNumber + 4)

      if (firstPage > 1) {
        pageNumbers.push(1)
        if (firstPage > 2) pageNumbers.push('...')
      }

      for (let i = firstPage; i <= lastPage; i++) {
        pageNumbers.push(i)
      }

      if (lastPage < totalPages) {
        if (lastPage < totalPages - 1) pageNumbers.push('...')
        pageNumbers.push(totalPages)
      }
    }

    return pageNumbers
  }

  const handlePrev = () => {
    if (pageNumber > 1) {
      handlePageChange(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (pageNumber < totalPages) {
      handlePageChange(pageNumber + 1)
    }
  }

  return (
    <nav aria-label='Page navigation example' className='w-full'>
      <ul className='inline-flex w-full justify-center space-x-px text-sm'>
        <li>
          <button
            disabled={pageNumber === 1}
            onClick={handlePrev}
            className='flex h-8 items-center justify-center rounded-s-lg border bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-400'
          >
            Prev
          </button>
        </li>
        {visiblePages().map((page, index) => (
          <li key={index}>
            {page === '...' ? (
              <button
                disabled
                className='flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500'
              >
                {page}
              </button>
            ) : (
              <button
                className={`flex h-8 cursor-pointer items-center justify-center px-3 leading-tight ${
                  page === pageNumber
                    ? 'border border-gray-300 bg-blue-50 text-blue-600'
                    : 'border border-gray-300 bg-white text-gray-500'
                } hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => handlePageChange(page as number)}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            disabled={pageNumber === totalPages}
            onClick={handleNext}
            className='flex h-8 items-center justify-center rounded-e-lg border bg-white px-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200 disabled:hover:text-gray-400'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
