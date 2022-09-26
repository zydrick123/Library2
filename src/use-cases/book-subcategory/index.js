const bookSubCatDB = require('../../data-access/book-subcategory/index')

const { registerBookSubCat_Entity, updateBookSubCat_Entity } = require('../../entities/book-subcategory/index')

const getAllBookSubCat = require('./get-all-book-subcategory')
const createBookSubCat = require('./add-book-subcategory')
const updateBookSubCat = require('./update-book-subcategory')


//initialize
const getAllBookSubCatsUseCase = getAllBookSubCat({ bookSubCatDB })
const updateBookSubCatUseCase = updateBookSubCat({ bookSubCatDB, updateBookSubCat_Entity })
const addBookSubCatsUseCase = createBookSubCat({ bookSubCatDB, registerBookSubCat_Entity })


const services = Object.freeze({
    getAllBookSubCatsUseCase, addBookSubCatsUseCase, updateBookSubCatUseCase
})


module.exports = services, { getAllBookSubCatsUseCase, addBookSubCatsUseCase, updateBookSubCatUseCase }