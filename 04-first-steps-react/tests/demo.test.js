describe('Tets in <DemoComponent />', () => {
  test('Test', () => {
    // 1. Init.
    const msg1 = 'Hello World'

    // 2. Logic
    const msg2 = msg1.trim()

    // 3. Behavior

    expect(msg1).toBe(msg2)
  })
})
