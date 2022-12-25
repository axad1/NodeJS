fs = require('fs')

fs.appendFileSync('data.txt', ' ...welcome')

fs.appendFile('data.txt', ' Welcome', err=>{
    if(err) throw err
})