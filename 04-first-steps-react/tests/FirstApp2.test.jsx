import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Test in <FirstAopp/>', () => {
  const title = "Hi, I'm Raul"
  const subtitle = 'How are you?'

  test('should match the snapshot', () => {
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('should display the message  "Hi, I am Raul', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
  })

  test('should display title as h1', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })

  test('should display subtitle sent as prop', () => {
    render(<FirstApp title={title} subtitle={subtitle} />)
    expect(screen.getAllByText(subtitle).length).toBe(1)
  })
})
