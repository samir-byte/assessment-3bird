import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import SearchBar from './SearchBar'
import { MemoryRouter } from 'react-router-dom'

describe('SearchBar component', () => {
  it('renders search bar with placeholder', () => {
    const placeholderText = 'Search repositories'
    render(
      <MemoryRouter>
        <SearchBar placeholder={placeholderText} />
      </MemoryRouter>
    )

    const searchBarElement = screen.getByPlaceholderText(placeholderText)
    expect(searchBarElement).toBeInTheDocument()
  })

  it('updates input value on change', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    )

    const inputElement = screen.getByRole('searchbox')

    fireEvent.change(inputElement, { target: { value: 'react' } })

    expect(inputElement).toHaveValue('react')
  })
})
