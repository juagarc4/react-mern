import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'

describe('Test in <CounterApp/>', () => {
  const initialvalue = 100

  test('should match the snapshot', () => {
    const { container } = render(<CounterApp value={initialvalue} />)
    expect(container).toMatchSnapshot()
  })

  test('should display the intial value 100', () => {
    render(<CounterApp value={initialvalue} />)
    expect(screen.getByText(initialvalue)).toBeTruthy()
  })

  test('should increment with the Button +1', () => {
    render(<CounterApp value={initialvalue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText(initialvalue + 1)).toBeTruthy()
  })
  test('should increment with the Button +1', () => {
    render(<CounterApp value={initialvalue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText(initialvalue - 1)).toBeTruthy()
  })
  test('should reset the counter with the Button "Reset"', () => {
    render(<CounterApp value={initialvalue} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    //fireEvent.click(screen.getByText('Reset'))
    // Alternate way to get the Reset button. Use 'aria-label' or 'name' or 'id'
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
    expect(screen.getByText(initialvalue)).toBeTruthy()
  })
})
