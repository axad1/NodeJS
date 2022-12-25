fs = require('fs')

fs.renameSync('data.txt', 'file.txt')


fs.rename('data.txt', 'file.txt', err=>{
    if(err) throw err
})