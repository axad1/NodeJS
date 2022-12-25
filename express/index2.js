express = require('express')
path = require('path')
app = express()

app.use(experss.static('static'))



app.listen(3000)