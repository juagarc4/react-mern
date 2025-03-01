import { getHeroByIdAsync } from '../../src/base-pruebas/09-promises'
import heroes from '../../src/data/heroes'

describe('Tests in 09-promises.js', () => {
  test('getHeroByIdAsync should return a hero by id', (done) => {
    const id = 1
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
      done()
    })
  })
  test('getHeroByIdAsync should return error if hero does not exist', (done) => {
    const id = 100
    getHeroByIdAsync(id)
      // This Should not be executed, but it could be interesting to
      // Check this case in order to find whane the test fails if the heroes
      // are addeed and the id tested suddenly exists.
      .then((hero) => {
        expect(hero).toBeFalsy()
        done()
      })
      .catch((error) => {
        expect(error).toBe(`Hero with id:  ${id} could not be found`)
        done()
      })
  })
})
