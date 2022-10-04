import { render, screen } from '@testing-library/react'
import AboutMe from '../AboutMe'

describe('AboutMe component', () => {
  it('should render the titles correctly', () => {
    render(<AboutMe />)
    screen.getByText('Welcome!')
    screen.getByText('Development Stack')
  })

  it('should render', () => {
    const { container } = render(<AboutMe />)
    expect(container).toMatchSnapshot()
  })
})
