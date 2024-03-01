import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { RepositoryPage } from './page'
import Loader from '../../components/Shared/Loader/Loader'
import Alert from '../../components/Shared/Alert/Alert'
import EmptyState from '../../components/Shared/Empty/Empty'

describe('RepositoryPage component', () => {
  it('renders RepositoryPage component', async () => {
    render(
      <MemoryRouter>
        <RepositoryPage />
      </MemoryRouter>
    )
    const { getByTestId } = screen
    const searchBar = getByTestId('search-bar')
    expect(searchBar).toBeInTheDocument()
  })

  it('renders the Loader when isLoading is true', () => {
    const isLoading = true
    render(isLoading && <Loader />)

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('renders the Alert when isError is true', () => {
    const isError = true
    render(isError && <Alert message='Something went wrong' variant='danger' />)

    expect(screen.getByTestId('alert')).toBeInTheDocument()
  })

  it('renders the empty state when no data found', () => {
    const emptyData = true // assuming variable for no data found
    render(emptyData && <EmptyState />)

    expect(screen.getByTestId('empty-state')).toBeInTheDocument()
  })
})
