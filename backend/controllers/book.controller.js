const Book = require('../models/book.model')


let findBooks = () => {
    return Book.find({})
}

let newBook = (book, imgPath) => {
    return new Book({
        ...book,
        imgPath : imgPath
    }).save()
}

let deleteBook = id => {
    return Book.findByIdAndDelete(id)
}

module.exports = {
    findBooks,
    newBook,
    deleteBook
}