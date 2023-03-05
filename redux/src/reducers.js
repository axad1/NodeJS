
module.exports =  function reducer(state=[], action){
    switch(action.type){
        case 'bugAdded':
            return [
                ...state,
                {
                    id: action.payload.id,
                    description: action.payload.description,
                    resolved: false,
                }
            ]
        case 'bugResolved':
            return state.map(bug=> bug.id==action.payload.id? {...bug, resolved:true} : bug )
        case 'bugRemoved':
            return state.filter(bug => bug.id!=action.payload.id)
        default:
            return state
    }
}