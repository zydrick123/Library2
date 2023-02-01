const bookDB = require('../../data-access/books/index')

const { registerBook_Entity, updateBook_Entity } = require('../../entities/books/index')

const getAllBook = require('./get-all-book')
const createBook = require('./add-book')
const updateBook = require('./update-book')
const updatestatus = require('./updatestatus')


//initialize
const getAllBooksUseCase = getAllBook({ bookDB })
const updatestatusUseCase = updatestatus({ bookDB })
const updateBookUseCase = updateBook({ bookDB, updateBook_Entity })
const addBooksUseCase = createBook({ bookDB, registerBook_Entity })


const services = Object.freeze({
    getAllBooksUseCase, addBooksUseCase, updateBookUseCase, updatestatusUseCase
})


module.exports = services, { getAllBooksUseCase, addBooksUseCase, updateBookUseCase, updatestatusUseCase }