const { getAllBookSubCatsUseCase, addBookSubCatsUseCase, updateBookSubCatUseCase } = require('../../use-cases/book-subcategory/index')


const getAllBookSubCats = require('./get-all-book-subcategory')
const addBookSubCat = require('./add-book-subcategory')
const updateBookSubCat = require('./update-book-subcategory')

const getAllBookSubCatsController = getAllBookSubCats({ getAllBookSubCatsUseCase })
const updateBookSubCatController = updateBookSubCat({ updateBookSubCatUseCase })
const addBookSubCatController = addBookSubCat({ addBookSubCatsUseCase })

const services = Object.freeze({
    getAllBookSubCatsController, addBookSubCatController, updateBookSubCatController
})

module.exports = services, { getAllBookSubCatsController, addBookSubCatController, updateBookSubCatController }