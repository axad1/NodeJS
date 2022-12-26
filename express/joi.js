express = require('express')
fs = require('fs')
Joi = require('joi')

app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    fs.readFile('static/index.html', 'utf-8' , (err, file)=> res.send(file))
})

app.post('/', (req, res)=>{
    schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    })

    result = schema.validate(req.body)

    console.log(result.error)

    res.json(req.body)
})

app.listen(3000)