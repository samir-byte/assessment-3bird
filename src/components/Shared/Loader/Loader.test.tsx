import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Loader from './Loader'

describe('Loader component', () => {
  it('renders loader container element', () => {
    render(<Loader />)

    const loaderElement = screen.getByTestId('loader')
    expect(loaderElement).toBeInTheDocument()
  })
})
