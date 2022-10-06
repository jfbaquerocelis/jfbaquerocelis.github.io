import { render, screen } from '@testing-library/react'
import Experience from '../Experience'

describe('Experience component', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('should render the titles correctly', () => {
    render(<Experience />)
    screen.getByText('EMPLOYMENT HISTORY')
  })

  it('should render', () => {
    const { container } = render(<Experience />)
    expect(container).toMatchSnapshot()
  })
})
