import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import EmptyState from './Empty'

describe('EmptyState component', () => {
  it('renders empty state message correctly', () => {
    render(<EmptyState />)

    const emptyStateElement = screen.getByTestId('empty-state')
    expect(emptyStateElement).toBeInTheDocument()
    expect(screen.getByText('Ohh! Nothing to display')).toBeInTheDocument()
    expect(
      screen.getByText('Please type repository name in above search bar')
    ).toBeInTheDocument()
  })
})
