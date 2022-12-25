
fp = require('./Modules/lodash/fp')

input = '   JavaScript   '
trim = str=> str.trim()
lower = str=> str.toLowerCase()
wrap = type=> str => `<${type}>${str}</${type}>`

output = wrap(lower(trim(input)))

transform = fp.compose(wrap('span'), lower, trim)
transform = fp.pipe(trim, lower, wrap('span'))

output = transform(input)

console.log(output)