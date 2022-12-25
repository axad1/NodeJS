const {createReadStream, createWriteStream} = require('fs')

const zlib = require('zlib')
const gunzip = zlib.createGunzip()

/** pipe chaining */

readStream = createReadStream('example.txt.gz')
writeStream = createWriteStream('example.txt')

// uncompress
readStream.pipe(gunzip).pipe(writeStream)
