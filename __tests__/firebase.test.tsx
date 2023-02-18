import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {

    render(<div role="heading">hello</div>)

    const heading = screen.getByRole('heading', {
      name: "hello",
    })

    expect(heading).toBeInTheDocument();
  })
})
