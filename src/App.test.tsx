import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  it('renders App', () => {
    const { getByTestId } = render(<App />)
    const app = getByTestId('app')

    expect(app).toBeInTheDocument()
  })
})
