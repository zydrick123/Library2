const { getAllBooksUseCase, addBooksUseCase, updateBookUseCase, updatestatusUseCase } = require('../../use-cases/books/index')


const getAllBooks = require('./get-all-books')
const addBook = require('./add-book')
const updateBook = require('./update-book')
const updatestatus = require('./updatestatus')

const getAllBooksController = getAllBooks({ getAllBooksUseCase })
const updateBookController = updateBook({ updateBookUseCase })
const addBookController = addBook({ addBooksUseCase })
const updatestatusController = updatestatus({ updatestatusUseCase })

const services = Object.freeze({
    getAllBooksController, addBookController, updateBookController, updatestatusController
})

module.exports = services, { getAllBooksController, addBookController, updateBookController, updatestatusController }