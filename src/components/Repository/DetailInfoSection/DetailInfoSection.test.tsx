import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DetailInfoSection from './DetailInfoSection'

describe('DetailInfoSection component', () => {
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

  it('renders repository detail section with correct data', () => {
    render(<DetailInfoSection {...mockRepositoryItem} />)
    expect(screen.getByText('Mock Repository')).toBeInTheDocument()
    expect(screen.getByText('mockuser')).toBeInTheDocument()
    expect(screen.getByAltText('Rounded avatar')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('main')).toBeInTheDocument()
  })
})
