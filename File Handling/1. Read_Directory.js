fs = require('fs')

dir = fs.readdirSync('.')
console.log(dir)


fs.readdir(".", (err, dir)=>{
    console.log(err? err: dir)
})