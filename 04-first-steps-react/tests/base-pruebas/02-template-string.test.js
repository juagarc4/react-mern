import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Test in 02-template-string.js', () => {
  test('getSaludo should return "Hi Raul', () => {
    const name = 'Raul'
    const msg = getSaludo(name)

    expect(msg).toBe(`Hola ${name}`)
  })
})
