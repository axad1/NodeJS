
Redux = require('./Modules/redux')
RTK = require('./Modules/redux-toolkit.umd')
Reselect = require('./Modules/reselect')

// create action manually
bugActions = {
    bugAdded : (id,description)=>( {type: "bugAdded", payload: {id, description}}),
    bugResolved: id=>( {type: "bugResolved", payload: {id}} ),
    bugRemoved: id=> ( {type: "bugRemoved", payload: {id}} )
}

// create reducer manually
bugReducer = (state=[], action)=>{
    switch(action.type){
        case "bugAdded":
            return [
                ...state,
                {
                    id : action.payload.id,
                    description : action.payload.description,
                    resolved : false
                }
            ]
            case "bugResolved":
                return state.map(bug => bug.id != action.payload.id ? bug : {...bug, resolved: true})
            case "bugRemoved":
                return state.filter(bug => bug.id != action.payload.id)
        default:
            return state
    }
}

// create actions with RTK
projectActions = {
    projectAdded: RTK.createAction("projectAdded"),
    projectComplete: RTK.createAction("projectComplete"),
    projectRemoved: RTK.createAction("projectRemoved"),
    projectAssignedToUser: RTK.createAction("projectAssignedToUser")
}

//  create reducer with RTK (it uses immer)
projectReducer = RTK.createReducer([], {
    // action : function
    [projectActions.projectAdded.type] : (state, action)=>{
        state.push({
            id: action.payload.id,
            description: action.payload.description,
            completed: false
        })
    },
    [projectActions.projectComplete.type] : (state, action)=>{
        index = state.findIndex(item=> item.id == action.payload.id)
        state[index].completed = true
    },
    [projectActions.projectRemoved.type] : (state, action)=>{
        index = state.findIndex(item=> item.id == action.payload.id)
        state.splice(index, 1)
    },
    [projectActions.projectAssignedToUser.type] : (state, action)=>{
        let {projectId, userId} = action.payload
        index = state.findIndex(project=> project.id == projectId)
        state[index].userId = userId
    }
})

//  create actions and reducer with RTK.slice
userSlice = RTK.createSlice({
    name : 'users',
    initialState: [],
    reducers: {
        userAdded : (state, action)=>{
                state.push({
                id: action.payload.id,
                name: action.payload.name,
            })
        }
    }
})

//  combineReducers
reducer = Redux.combineReducers({
    bugs: bugReducer,
    project: projectReducer,
    users: userSlice.reducer
})

middlewares = {
    logger: function(store){
    return function(next){
        return function(action){
            console.log("ready to do action")
            next(action)
            }
        }
    },
    auth: store=> next=> action=>{
        console.log("ready to auth")
        if(typeof action == 'function') action(store.getState, store.dispatch)
        else next(action)
    }
}


// store = Redux.createStore(bugReducer, Redux.applyMiddleware(logger))
// store = RTK.configureStore({ reducer })
store = RTK.configureStore({reducer,
    middleware: [...RTK.getDefaultMiddleware(), middlewares.logger, middlewares.auth]
})
// store = Redux.createStore(reducer)

unsubscribe =  store.subscribe(()=>{
    console.log('Store changed: ', store.getState())
})


// store.dispatch(bugActions.bugAdded(1, 'bug-1'))
// store.dispatch(bugActions.bugResolved(1))
// store.dispatch(bugActions.bugRemoved(1))

// store.dispatch(projectActions.projectAdded( {id: 1, description: 'Project-1'} ))
// store.dispatch(projectActions.projectComplete({ id: 1}))
// store.dispatch(projectActions.projectRemoved({ id: 1}))

store.dispatch(userSlice.actions.userAdded( {id:1, name:"Asad"} ))
// store.dispatch(projectActions.projectAssignedToUser( {projectId:1, userId:1} ))

//test case
store.dispatch((getState, dispatch)=>{
    dispatch(userSlice.actions.userAdded( {id:2, name:"error"} ))
})



//  Selectors
getUnresolvedBugs = Reselect.createSelector(
    store=> store,
    bugs=> bugs.filter(bug=> bug.resolved)
)

getProjectByUser = id=> Reselect.createSelector(
    store => store.project,
    projects => projects.filter(project=> project.id==id)
)

// ans = getUnresolved(store.getState())
// let [ans] = getProjectByUser(1)(store.getState())


unsubscribe()