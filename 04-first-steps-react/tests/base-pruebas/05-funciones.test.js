import { getUser, getUserActive } from '../../src/base-pruebas/05-funciones'

describe('Tests in 05-funciones.js', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    }
    const user = getUser()

    expect(testUser).toEqual(user)
  })

  test('getUserActive return an object with the active user', () => {
    const testUser = {
      uid: 'ABC567',
      username: 'Raul',
    }
    const user = getUserActive('Raul')
    expect(testUser).toEqual(user)
  })
})
