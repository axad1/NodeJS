http = require('http')
fs = require('fs')

http.createServer((req, res)=> {
    switch(req.url){
        case '/':
            fs.readFile('static/index.html', (err, file)=>{
                if(!err){
                    res.writeHead(200, {'Content-type':'text/html'})
                    res.write(file)
                    res.end()
                }else{
                    res.writeHead(404)
                    res.end()
                }
            })
            break
        case '/json':
            res.writeHead(200, {'Content-type':'application/json'})
            fs.createReadStream('static/example.json').on('data', chunk=>{
                res.write(chunk)
                res.end()
            })
            break
        case '/image':
            res.writeHead(200, {'Content-type':'image/png'})
            fs.createReadStream('static/example.png').pipe(res)
            break;
        default:
            res.writeHead(404)
            res.end()
    }
}).listen(3000)