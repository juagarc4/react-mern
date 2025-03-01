import { returnArray } from '../../src/base-pruebas/07-deses-arr'

describe('Tests in 07-deses-arr.test.js', () => {
  test('returnArray should return an array', () => {
    const [letters, numbers] = returnArray()

    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)

    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')

    expect(letters).toEqual(expect.any(String))
    expect(numbers).toEqual(expect.any(Number))
  })
})
