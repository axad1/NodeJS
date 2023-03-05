store = require('./store')
actions = require('./actions')


store.dispatch(actions.bugAdded(3, "Hello"))
store.dispatch(actions.bugResolved(3))
store.dispatch(actions.bugRemoved(3))
