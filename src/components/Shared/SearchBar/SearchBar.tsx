import React, { KeyboardEvent, useEffect, useState } from 'react'
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

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value
      if (value === '') return
      setSearchParams(prevSearchParams => {
        prevSearchParams.set('q', value)
        return prevSearchParams
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div data-testid='search-bar'>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleSearchKeyDown}
        className='rounded border px-2 py-1 focus:border-blue-500 focus:outline-none'
        type='search'
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar
