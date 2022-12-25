fs = require('fs')

readStream = fs.createReadStream('example.txt', 'utf-8')
writeStream = fs.createWriteStream('example2.txt')

// readStream.on('data', chunk=>{
//     console.log(chunk)
//     writeStream.write(chunk)
// })

// it does the same task
readStream.pipe(writeStream)





