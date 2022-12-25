
EventEmitter = require('events')

emitter = new EventEmitter()

// register an event
emitter.on('userLogged', (id, user)=> console.log(`${user} logged in`))

// raise an event
emitter.emit('userLogged', 1, 'Asad')
