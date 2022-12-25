express = require('express')
path = require('path')
bodyParser = require('body-parser')

app = express()

app.use('/public', express.static('static'))
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    res.send('Hello World from Express JS')
})

app.get('/user/:name/:age', (req, res)=>{
    console.log(req.params)
    res.send(req.params.name + ':' + req.params.age)
})

app.get('/file', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/', (req, res)=> {
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.password)
    res.send('Success')
})

app.listen(3000)