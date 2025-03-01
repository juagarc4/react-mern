import { getByText, render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Test in <FirstAopp/>', () => {
  // test('should match the snapshot', () => {
  //   const title = "I'm Raul"
  //   const { container } = render(<FirstApp title={title} />)
  //   expect(container).toMatchSnapshot()
  // })
  test('should display title as h1', () => {
    const title = "I'm Raul"
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />)

    //expect(getByText("I'm Raul")).toBeTruthy()
    expect(getByTestId('test-title')).toBeTruthy()
    expect(getByTestId('test-title').innerHTML).toContain(title)

    // Not recommended to do in this way
    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)
  })
  test('should display subtitle sent as prop', () => {
    const title = "Hi, I'm Raul"
    const subtitle = 'How ahre you?'
    const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />)

    expect(getAllByText(subtitle).length).toBe(1)
  })
})
