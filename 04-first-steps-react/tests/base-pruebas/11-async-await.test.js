import { getImage } from '../../src/base-pruebas/11-async-await'

describe('Test ins 11-async-await.js', () => {
  test('getImage should return the url of the image', async () => {
    const url = await getImage()
    expect(typeof url).toBe('string')
  })
  test('getImage should return error if we do not have API Key', async () => {
    const resp = await getImage()
    expect(resp).toBe('Image not found')
  })
})
