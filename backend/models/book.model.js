const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    imgPath: String,
    created_at: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('book', BookSchema)