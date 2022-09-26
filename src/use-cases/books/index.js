const bookDB = require('../../data-access/books/index')

const { registerBook_Entity, updateBook_Entity } = require('../../entities/books/index')

const getAllBook = require('./get-all-book')
const createBook = require('./add-book')
const updateBook = require('./update-book')


//initialize
const getAllBooksUseCase = getAllBook({ bookDB })
const updateBookUseCase = updateBook({ bookDB, updateBook_Entity })
const addBooksUseCase = createBook({ bookDB, registerBook_Entity })


const services = Object.freeze({
    getAllBooksUseCase, addBooksUseCase, updateBookUseCase
})


module.exports = services, { getAllBooksUseCase, addBooksUseCase, updateBookUseCase }