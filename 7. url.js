url = require('url')

adr = 'http://localhost:8080/default.htm?year=2017&month=february'

q = url.parse(adr, true)

console.log(q)