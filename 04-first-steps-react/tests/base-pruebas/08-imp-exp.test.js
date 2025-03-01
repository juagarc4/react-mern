import { getHeroById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp'
import heroes from '../../src/data/heroes'

describe('Tests in 08-imp-exp.js', () => {
  test('getHeroById should return a hero by id', () => {
    const id = 1
    const hero = getHeroById(id)
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })
  test('getHeroById should return undefined if a hero does not exist', () => {
    const id = 100
    const hero = getHeroById(id)
    expect(hero).toBeFalsy()
  })
  test('getHeroByOwner should return the heroes belonging to DC', () => {
    const owner = 'DC'
    const heroesByOwner = getHeroesByOwner(owner)
    expect(heroesByOwner.length).toBe(3)

    expect(heroesByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
  test('getHeroByOwner should return the heroes belonging to Marvel', () => {
    const owner = 'Marvel'
    const heroesByOwner = getHeroesByOwner(owner)
    expect(heroesByOwner.length).toBe(2)
    expect(heroesByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner))
  })
})
