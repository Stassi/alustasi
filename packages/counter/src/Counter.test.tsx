import { fireEvent, render, screen } from '@testing-library/react'

import { Counter } from './Counter'

describe('Counter', (): void => {
  beforeEach((): void => {
    render(<Counter />)
  })

  it('should initialize at value 0', (): void => {
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })

  it('should increment to value 1 when button is clicked', (): void => {
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('heading')).toHaveTextContent('1')
  })
})
