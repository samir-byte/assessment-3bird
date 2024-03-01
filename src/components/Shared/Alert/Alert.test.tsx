import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Alert from './Alert'

describe('Alert component', () => {
  it('renders default variant alert with message', () => {
    const message = 'This is a default alert message'
    render(<Alert message={message} />)

    const alert = screen.getByTestId('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-gray-50 text-gray-800')
    expect(alert).toHaveTextContent(message)
  })

  it('renders danger variant alert with message', () => {
    const message = 'This is a danger alert message'
    render(<Alert message={message} variant='danger' />)

    const alert = screen.getByTestId('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-red-50 text-red-800')
    expect(alert).toHaveTextContent(message)
  })

  it('renders success variant alert with message', () => {
    const message = 'This is a success alert message'
    render(<Alert message={message} variant='success' />)

    const alert = screen.getByTestId('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('bg-green-50 text-green-800')
    expect(alert).toHaveTextContent(message)
  })
})
