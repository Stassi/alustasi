/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import Page from './page'

describe('Server Component (RSC)', (): void => {
  beforeEach((): void => {
    render(<Page />)
  })

  it('should have text "App Router" in its heading', (): void => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'App Router',
    )
  })
})
