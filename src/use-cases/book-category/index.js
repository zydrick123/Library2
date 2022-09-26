const bookCatDB = require('../../data-access/book-category/index')

const { registerBookCat_Entity, updateBookCat_Entity } = require('../../entities/book-category/index')

const getAllBookCat = require('./get-all-book-category')
const createBookCat = require('./add-book-category')
const updateBookCat = require('./update-book-category')


//initialize
const getAllBookCatsUseCase = getAllBookCat({ bookCatDB })
const updateBookCatUseCase = updateBookCat({ bookCatDB, updateBookCat_Entity })
const addBookCatsUseCase = createBookCat({ bookCatDB, registerBookCat_Entity })


const services = Object.freeze({
    getAllBookCatsUseCase, addBookCatsUseCase, updateBookCatUseCase
})


module.exports = services, { getAllBookCatsUseCase, addBookCatsUseCase, updateBookCatUseCase }