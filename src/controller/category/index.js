const { getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase, updatestatusUseCase } = require('../../use-cases/category/index')


const getAllCategorys = require('./get-all-category')
const addCategory = require('./add-category')
const updateCategory = require('./update-category')
const updatestatus = require('./updatestatus')

const getAllCategorysController = getAllCategorys({ getAllCategorysUseCase })
const updateCategoryController = updateCategory({ updateCategoryUseCase })
const addCategoryController = addCategory({ addCategorysUseCase })
const updatestatusController = updatestatus({ updatestatusUseCase })

const services = Object.freeze({
    getAllCategorysController, addCategoryController, updateCategoryController, updatestatusController
})

module.exports = services, { getAllCategorysController, addCategoryController, updateCategoryController, updatestatusController }