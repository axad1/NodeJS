fs = require('fs')

fs.readFile('./example.txt', (err, file)=> console.log(file))