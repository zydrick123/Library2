const { getAllBookCatsUseCase, addBookCatsUseCase, updateBookCatUseCase } = require('../../use-cases/book-category/index')


const getAllBookCats = require('./get-all-book-category')
const addBookCat = require('./add-book-category')
const updateBookCat = require('./update-book-category')

const getAllBookCatsController = getAllBookCats({ getAllBookCatsUseCase })
const updateBookCatController = updateBookCat({ updateBookCatUseCase })
const addBookCatController = addBookCat({ addBookCatsUseCase })

const services = Object.freeze({
    getAllBookCatsController, addBookCatController, updateBookCatController
})

module.exports = services, { getAllBookCatsController, addBookCatController, updateBookCatController }