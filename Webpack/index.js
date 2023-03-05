const {compose, pipe} = require('lodash/fp')

input = '    JAVASCRIPT    '

trim = str=> str.trim()
wrap = str=> '<div>'+str+'</div>'
lower = str=> str.toLowerCase()

transform = pipe(trim, lower, wrap)
result = transform(input)

console.log(result)
