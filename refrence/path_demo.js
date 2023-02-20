const { DiffieHellmanGroup } = require('crypto')
const { join } = require('path')
const  path =  require('path')

// base file name
// console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// file extenstion

console.log(path.extname(__filename))

// create path objecft turn the path into an object, since its an object you can access any property
console.log(path.parse(__filename))

// concatenate paths uses join

console.log(path.join(__dirname,'test','hello.html'))

