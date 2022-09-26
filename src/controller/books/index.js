const { getAllBooksUseCase, addBooksUseCase, updateBookUseCase } = require('../../use-cases/books/index')


const getAllBooks = require('./get-all-books')
const addBook = require('./add-book')
const updateBook = require('./update-book')

const getAllBooksController = getAllBooks({ getAllBooksUseCase })
const updateBookController = updateBook({ updateBookUseCase })
const addBookController = addBook({ addBooksUseCase })

const services = Object.freeze({
    getAllBooksController, addBookController, updateBookController
})

module.exports = services, { getAllBooksController, addBookController, updateBookController }