// Task: Return Heroe with id 2

// By using "export default <name>" we don't need to use {} to refer the exported object
// Other exports like "export <object>" require the use of {}
import heroes, { owners } from '../data/heroes'

// We use export to use the functio in the next exercise.
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)
console.log(getHeroeById(2))

// Task 2: Return all Heroes by Owner.
// We use export to use the functio in the next exercise.
export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner)
console.log(getHeroesByOwner('Marvel'))
