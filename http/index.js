http = require('http')
fs = require('fs')

server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-type': 'text/html' })
            readStream = fs.createReadStream('static/index.html')
            readStream.pipe(res)
            break
        case '/json':
            readStream = fs.createReadStream('static/example.json')
            res.writeHead(200, { 'Content-type': 'application/json' })
            readStream.pipe(res)
            break
        case '/image':
            readStream = fs.createReadStream('static/example.png')
            res.writeHead(200, { 'Content-type': 'image/png' })
            readStream.pipe(res)
            break;
        default:
            res.writeHead(404)
            res.end()
        }
}).listen(3000)