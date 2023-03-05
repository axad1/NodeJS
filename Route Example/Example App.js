
http = require('http')
fs = require('fs')
url = require('url')

http.createServer((req, res)=>{
    q = url.parse(req.url, true)
    filename = '.' + q.pathname + ".html"
    console.log(filename)
    fs.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.end('404 Not Found')
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    })
}).listen(3000)

console.log("Running...")