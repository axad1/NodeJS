
module.exports = {
    bugAdded: (id,description)=>( {type: "bugAdded", payload: {id, description}}),
    bugResolved: id=>( {type: "bugResolved", payload: {id}} ),
    bugRemoved: id=> ( {type: "bugRemoved", payload: {id}} )
}