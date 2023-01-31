const categoryDB = require('../../data-access/category/index')

const { registerCategory_Entity, updateCategory_Entity } = require('../../entities/category/index')

const getAllCategory = require('./get-all-category')
const createCategory = require('./add-category')
const updateCategory = require('./update-category')


//initialize
const getAllCategorysUseCase = getAllCategory({ categoryDB })
const updateCategoryUseCase = updateCategory({ categoryDB, updateCategory_Entity })
const addCategorysUseCase = createCategory({ categoryDB, registerCategory_Entity })


const services = Object.freeze({
    getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase
})


module.exports = services, { getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase }