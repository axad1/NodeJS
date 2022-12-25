function createStore(){
    let state = 1

    function getState() {
        return state
    }

    return {
        getState
    }
}

store = createStore()
store.state = 1

console.log(store)