import React, { KeyboardEvent, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

interface SearchProps {
  placeholder?: string
}

const SearchBar: React.FC<SearchProps> = ({ placeholder }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchText = searchParams.get('q') ?? ''
  const [inputValue, setInputValue] = useState(searchText)

  useEffect(() => {
    setInputValue(searchText)
  }, [searchText])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearch = (value: string) => {
    if (value === '') return

    setSearchParams(prevSearchParams => {
      const newSearchParams = { ...prevSearchParams, q: value }
      return newSearchParams
    })
  }

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value
      handleSearch(value)
    }
  }

  const handleSearchClick = () => {
    const value = inputValue
    handleSearch(value)
  }

  return (
    <div data-testid='search-bar' className='flex items-center gap-2'>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleSearchKeyDown}
        className='rounded border px-2 py-1 focus:border-blue-500 focus:outline-none'
        type='search'
        placeholder={placeholder}
      />
      <button
        className='ml-2 h-5 w-5 cursor-pointer text-gray-400'
        onClick={handleSearchClick}
      >
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchBar
