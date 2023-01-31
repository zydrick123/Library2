const issued_BookDB = require('../../data-access/issued_Books/index')

const { registerIssued_Books_Entity, updateIssued_Books_Entity } = require('../../entities/issued_books/index')

const getAllIssued_Book = require('./get-all-issued_book')
const createIssued_Book = require('./add-issued_book')
const updateIssued_Book = require('./update-issued_book')


//initialize
const getAllIssued_BooksUseCase = getAllIssued_Book({ issued_BookDB })
const updateIssued_BookUseCase = updateIssued_Book({ issued_BookDB, updateIssued_Books_Entity })
const addIssued_BooksUseCase = createIssued_Book({ issued_BookDB, registerIssued_Books_Entity })


const services = Object.freeze({
    getAllIssued_BooksUseCase, addIssued_BooksUseCase, updateIssued_BookUseCase
})


module.exports = services, { getAllIssued_BooksUseCase, addIssued_BooksUseCase, updateIssued_BookUseCase }