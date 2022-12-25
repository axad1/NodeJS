fs = require('fs')

fs.writeFileSync("data.txt", "Hello Asad")


fs.writeFile("data.txt", "Hello Asad", err=>{
    if(err) throw err
    else console.log("file created.")
})