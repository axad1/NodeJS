fs = require('fs')

fs.unlinkSync('data.txt')


fs.unlink('data.txt', err=>{
    if(err) throw err
})