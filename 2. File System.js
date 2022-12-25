fs = require('fs')

// --------------
// * READ DIRECTORY

folder = fs.readdirSync('.')

fs.readdir('.', (err, dir)=> {
    err ? err : dir
})

// --------------
// * READ FILE

file = fs.readFileSync('index.html', 'UTF-8')

fs.readFile('index.html', 'UTF-8', (err, data)=>{
    err ? err : data
})

// --------------
// * APPEND FILE

fs.appendFileSync('file.txt', "hello world")

fs.appendFile('file.txt', 'hey', err=>{
    if(err) throw err
})

// * WRITE FILE
// fs.writeFileSync('file.txt', 'Hello Asad')

// fs.writeFile('file.txt', "hey asad", err=>{
//     if(err) throw err
// })

// * DELETE FILE
// fs.unlinkSync('file.txt')

// fs.unlink('file.txt', (err)=>{
//     if(err) throw err
// })

// * RENAME FILE
// fs.renameSync('file.txt', 'text.txt')

// fs.rename('text.txt', 'file.txt', (err)=>{
//     if(err) throw err
// })

