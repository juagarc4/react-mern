// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImage = async () => {
  try {
    //const apiKey = 'apRdaKcwOzqVBsDIpZE2MzSssnZXNexp'
    const apiKey = ''
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json()

    const { url } = data.images.original

    return url
  } catch (error) {
    return 'Image not found'
  }
}
