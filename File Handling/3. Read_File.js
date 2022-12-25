fs = require('fs')

file = fs.readFileSync('data.txt', 'utf-8')


fs.readFile('data.txt', 'utf-8', (err, file)=>{
    console.log(err? err:file)
})