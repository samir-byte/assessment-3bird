import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import RepositoryToolbar from './RepositoryToolbar'
import { MemoryRouter } from 'react-router-dom'

describe('RepositoryToolbar component', () => {
  it('renders repository toolbar with correct total count', () => {
    const totalCount = 10
    render(
      <MemoryRouter>
        <RepositoryToolbar totalCount={totalCount} />
      </MemoryRouter>
    )

    expect(screen.getByText('Repositories: 10 Results')).toBeInTheDocument()
  })
})
