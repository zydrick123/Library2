const categoryDB = require('../../data-access/category/index')

const { registerCategory_Entity, updateCategory_Entity } = require('../../entities/category/index')

const getAllCategory = require('./get-all-category')
const createCategory = require('./add-category')
const updateCategory = require('./update-category')
const updatestatus = require('./updatestatus')


//initialize
const getAllCategorysUseCase = getAllCategory({ categoryDB })
const updateCategoryUseCase = updateCategory({ categoryDB, updateCategory_Entity })
const addCategorysUseCase = createCategory({ categoryDB, registerCategory_Entity })
const updatestatusUseCase = updatestatus({ categoryDB })

const services = Object.freeze({
    getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase, updatestatusUseCase
})


module.exports = services, { getAllCategorysUseCase, addCategorysUseCase, updateCategoryUseCase, updatestatusUseCase }