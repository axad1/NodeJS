require('./style.css')
image = require('./updates.png')

root = document.getElementById('root')
h1 = document.createElement("h1")
h1.innerText = 'Hello world'
root.appendChild(h1)

root.classList.add('hello')

myImage = new Image()
myImage.src = image
root.appendChild(myImage)