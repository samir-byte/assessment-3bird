import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Pagination from './Pagination'
import { MemoryRouter } from 'react-router-dom'

describe('Pagination component', () => {
  it('renders correctly with default props', () => {
    const totalResults = 100
    render(
      <MemoryRouter>
        <Pagination totalResults={totalResults} />
      </MemoryRouter>
    )

    expect(screen.getByText('Prev')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('renders correctly with current page set', () => {
    const totalResults = 100
    const currentPage = 3
    render(
      <MemoryRouter>
        <Pagination totalResults={totalResults} currentPage={currentPage} />
      </MemoryRouter>
    )

    expect(screen.getByText('Prev')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()

    expect(screen.getByText(currentPage)).toHaveClass('bg-blue-50')
  })
})
