
actionsTypes = {
    BUG_ADDED : 'bugAdded',
    BUG_REMOVED : 'bugRemoved',
    BUG_RESOLVED : 'bugResolved'
}
//  Actions
actions = {
    bugAdded : (id,description)=>{
        return {
            type: actionsTypes.BUG_ADDED,
            payload : {
                id,
                description
            }
        }
    },
    bugRemoved : id=>{
        return {
            type: actionsTypes.BUG_REMOVED,
            payload : {
                id
            }
        }
    },
    bugResolved : id=>{
        return {
            type: actionsTypes.BUG_RESOLVED,
            payload : {
                id
            }
        }
    }
}
//  Reducer
reducer = (state=[], action)=>{
    switch(action.type){
        case actionsTypes.BUG_ADDED:
            return [
                ...state,
                {
                    id : action.payload.id,
                    description : action.payload.description,
                    resolved : false
                }
            ]
        case actionsTypes.BUG_REMOVED:
            return state.filter(bug => bug.id != action.payload.id)
        case actionsTypes.BUG_RESOLVED:
            return state.map(bug => bug.id != action.payload.id ? bug : {...bug, resolved: true})
        default:
            return state
    }
}

logger = store=> next=> action=> {
    console.log("action has been taken")
    next(action)
}
api = store=> next=> action=>{
    if(action.type != 'apiCallBegan') return next(action)
    next(action)
    const {url, method, data, onSuccess, onError} = action.payload
    axios.request({
        baseURL: 'http://localhost:5500',
        url,
        method,
        data,
    }).then(res=> {
        console.log(res)
        store.dispatch({type: onSuccess, payload: res.data})
    }).catch(error=> {
        console.log(res)
        store.dispatch({type: onError, payload: error})
    })

}

// store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store = Redux.createStore(reducer, devToolsEnhancer({trace:true}))

// store = Redux.createStore(reducer, reduxDevtoolsExtension.devToolsEnhancer({trace:true}))

// store = RTK.configureStore({ reducer })

enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
store = Redux.createStore(reducer, enhancer(Redux.applyMiddleware(logger, api)));


unsubscribe =  store.subscribe(()=>{
    console.log('Store changed to', store.getState())
})


// store.dispatch(actions.bugAdded(1, 'Here is a new bug'))
// store.dispatch(actions.bugResolved(1))
// store.dispatch(actions.bugRemoved(1))

store.dispatch({
    type: "apiCallBegan",
    payload: {
        url: '/hello.txt',
        onSuccess: 'bugsReceived',
        onError: 'apiRequestFailed'
    }
})


unsubscribe()