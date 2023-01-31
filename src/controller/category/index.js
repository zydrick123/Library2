const { getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase } = require('../../use-cases/category/index')


const getAllCategorys = require('./get-all-category')
const addCategory = require('./add-category')
const updateCategory = require('./update-category')

const getAllCategorysController = getAllCategorys({ getAllCategorysUseCase })
const updateCategoryController = updateCategory({ updateCategoryUseCase })
const addCategoryController = addCategory({ addCategorysUseCase })

const services = Object.freeze({
    getAllCategorysController, addCategoryController, updateCategoryController
})

module.exports = services, { getAllCategorysController, addCategoryController, updateCategoryController }