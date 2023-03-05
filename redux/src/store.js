const {createStore} = require('redux')
const {devToolsEnhancer, composeWithDevTools } = require('redux-devtools-extension')
reducer = require('./reducers')



store = createStore(reducer, devToolsEnhancer({trace:true}))
unsubscribe =  store.subscribe(()=> console.log('store changed', store.getState()))

module.exports = store