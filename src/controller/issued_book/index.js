const { getAllIssued_BooksUseCase, addIssued_BooksUseCase, updateIssued_BookUseCase } = require('../../use-cases/issued_book/index')


const getAllIssued_books = require('./get-all-issued_books')
const addIssued_book = require('./add-issued_book')
const updateIssued_book = require('./update-issued_book')

const getAllIssued_BooksController = getAllIssued_books({ getAllIssued_BooksUseCase })
const updateIssued_BookController = updateIssued_book({ updateIssued_BookUseCase })
const addIssued_BookController = addIssued_book({ addIssued_BooksUseCase })

const services = Object.freeze({
    getAllIssued_BooksController, addIssued_BookController, updateIssued_BookController
})

module.exports = services, { getAllIssued_BooksController, addIssued_BookController, updateIssued_BookController }