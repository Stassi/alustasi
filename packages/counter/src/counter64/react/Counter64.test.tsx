import { fireEvent, render, screen } from '@testing-library/react'

import { Counter64 } from '../../react/Counter'

describe('Counter 64 (React component)', (): void => {
  beforeEach((): void => {
    render(<Counter64 />)
  })

  it('should initialize at value 0', (): void => {
    expect(screen.getByRole('heading')).toHaveTextContent('0')
  })

  it('should increment to value 1 when button is clicked', (): void => {
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('heading')).toHaveTextContent('1')
  })
})
