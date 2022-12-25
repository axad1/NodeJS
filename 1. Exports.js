
// export an object
module.exports.fn = ()=> console.log(__dirname)

// export a single function
module.exports = ()=> console.log(__filename)

// exports is a reference to module.exports
// exports = somthing       : illegal

exports.fn = ()=> console.log("Hello Module")