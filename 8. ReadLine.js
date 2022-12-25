readline = require('readline')
rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question('Name? : ', (ans)=> console.log(ans) || rl.close())
rl.on('close', ()=> console.log("Correct"))

// or
rl.setPrompt('who? ')
rl.close()
ans = rl.getPrompt()
console.log(ans)