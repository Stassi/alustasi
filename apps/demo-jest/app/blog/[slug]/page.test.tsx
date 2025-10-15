import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Page from './page'

describe('Dynamic route segment', (): void => {
  beforeEach((): void => {
    render(<Page params={{ slug: 'Test' }} />)
  })

  it('should have the dynamic content in its heading', (): void => {
    expect(screen.getByRole('heading')).toHaveTextContent('Slug: Test')
  })
})
