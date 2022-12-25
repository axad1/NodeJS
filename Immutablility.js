
book = {'title': 'Harry Potter'}

//  IMMUTABLE
immutable = require('./Modules/immutable')
book2 = immutable.Map(book)
book2 = book2.set('author', 'Asad')
book2.get('author')
book2.toJS()


//  IMMER
immer = require('./Modules/immer')
book3 = immer.produce(book, book=> {
    book.pages = 30
})
