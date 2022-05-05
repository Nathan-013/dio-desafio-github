/*
- O objeto Map contém pares de chave-valor e lembra a ordem original da inserção 
das chaves. Qualquer valor (objetos e valores primitivos) podem ser usados como 
chave ou valor.

- Objetos Set são coleções de valores nas quais é possível iterar os elementos em
ordem de inserção. Um valor no Set pode ocorrer apenas uma vez; ele é único na 
coleção do Set.
*/

//Map
const getAdmins = map => {
  let admins = []
  
  for ([key, value] of map) {
    if (value === 'Admin'){
      admins.push(key)
    }
  }
  return admins
}

const users = new Map()

users.set('Luiz', 'Admin') //add uma chave e valor ao Map
users.set('Ana', 'User')
users.set('Carlos', 'Admin')
users.set('Maria', 'User')

console.log(getAdmins(users), users.has('Luiz'), users.get('Ana'))

//Set
const myArr = [30, 30, 40, 5, 223, 2049, 3034, 5]

const uniqueValues = arr => {
  const mySet = new Set(arr) //cria o set com valores unicos (sem repetições)
  // console.log(mySet, mySet.size)

  return [...mySet] //espalha os itens do set em um array com valores unicos
}

console.log(uniqueValues(myArr))