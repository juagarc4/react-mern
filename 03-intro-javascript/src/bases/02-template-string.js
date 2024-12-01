const firstname = 'Raul'
const surname = 'Garcia'

// const fullName = name + ' ' + surname;
const fullName = `${firstname} ${surname}`
console.log(fullName)

function getHello(name) {
  return 'Hello ' + name
}

console.log(`Esto es un texto ${getHello(fullName)}`)
