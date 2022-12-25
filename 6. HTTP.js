http = require('http')
fs = require('fs')
FILENAME = 'index.html'

// server is an EventEmitter
server = http.createServer((req, res)=>{
    if(req.url === '/'){
        fs.readFile(FILENAME, (err, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(err? err : data);
        })
    }
}).listen(3000)



// register connection event
// server.on('connection', (socket)=>{
//     console.log("New connection establish")
// })

// server.listen(3000)
console.log("connection running...")