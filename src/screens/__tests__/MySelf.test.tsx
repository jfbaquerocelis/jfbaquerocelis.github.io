import { cleanup, render, screen } from '@testing-library/react'
import MySelf from '../MySelf'

const texts = [
  'John Fredy Baquero Celis',
  'Senior Software Engineer',
  'System Engineer',
]

describe('MySelf component', () => {
  afterEach(cleanup)

  it('should render my fullname, title and role correctly', () => {
    render(<MySelf />)

    texts.forEach(text => screen.getByText(text))
  })

  it('should render', () => {
    const { container } = render(<MySelf />)
    expect(container).toMatchSnapshot()
  })
})
