const {createReadStream, createWriteStream} = require('fs')

const zlib = require('zlib')
const gzip = zlib.createGzip()

/** pipe chaining */

readStream = createReadStream('example.txt')
writeStream = createWriteStream('example.txt.gz')

// compress
readStream.pipe(gzip).pipe(writeStream)
