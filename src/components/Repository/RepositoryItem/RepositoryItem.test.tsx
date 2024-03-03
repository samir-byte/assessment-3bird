import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'
import RepositoryItem from './RepositoryItem'
import { formatNumber } from '../../../helpers'

describe('RepositoryItem component', () => {
  const mockRepositoryItem = {
    id: 123,
    full_name: 'Mock Repository',
    name: 'Mock Repository',
    description: 'This is a mock repository',
    owner: {
      login: 'mockuser',
      html_url: 'https://github.com/mockuser',
      avatar_url: 'https://github.com/mockuser.png'
    },
    stargazers_count: 100,
    forks: 50,
    watchers: 75,
    updated_at: '2022-01-01T00:00:00Z',
    open_issues: 10,
    default_branch: 'main',
    content: 'Mock content for the repository',
    html_url: 'https://github.com/mockuser/mock-repository'
  }

  it('renders repository item with correct data', () => {
    render(
      <Router>
        <RepositoryItem {...mockRepositoryItem} />
      </Router>
    )

    const repositoryNameLink = screen.getByRole('link', {
      name: /mock repository/i
    })
    expect(repositoryNameLink).toBeInTheDocument()
    expect(repositoryNameLink).toHaveAttribute(
      'href',
      `/${mockRepositoryItem.owner.login}/${mockRepositoryItem.name}?undefined`
    )

    const description = screen.getByText(/this is a mock repository/i)
    expect(description).toBeInTheDocument()

    const starCountItem = screen.getByText(
      formatNumber(mockRepositoryItem.stargazers_count)
    )
    expect(starCountItem).toBeInTheDocument()
    expect(screen.getByTestId('star-icon')).toBeInTheDocument()
    expect(
      screen.getByText(formatNumber(mockRepositoryItem.stargazers_count))
    ).toBeInTheDocument()
    expect(screen.getByTestId('fork-icon')).toBeInTheDocument()
    expect(
      screen.getByText(formatNumber(mockRepositoryItem.forks))
    ).toBeInTheDocument()
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument()

    expect(screen.getByText(/author: mockuser/i)).toBeInTheDocument()
  })
})
