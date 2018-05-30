var nameVar = 'Leonardo'
var nameVar = 'Mike'
console.log(nameVar)

let nameLet = 'Jon'
nameLet = 'John'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName () {
  var petName = 'Hal'
  return petName
}

const petName = getPetName()
console.log(petName)

// Block scoping

const fullName = 'Leonardo Moura'
let firstName
if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)

