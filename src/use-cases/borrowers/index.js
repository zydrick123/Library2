const borrowerDB = require('../../data-access/borrowers/index')

const { registerBorrower_Entity, updateBorrower_Entity } = require('../../entities/borrowers/index')

const getAllBorrower = require('./get-all-borrower')
const createBorrower = require('./add-borrower')
const updateBorrower = require('./update-borrower')


//initialize
const getAllBorrowersUseCase = getAllBorrower({ borrowerDB })
const updateBorrowerUseCase = updateBorrower({ borrowerDB, updateBorrower_Entity })
const addBorrowersUseCase = createBorrower({ borrowerDB, registerBorrower_Entity })


const services = Object.freeze({
    getAllBorrowersUseCase, addBorrowersUseCase, updateBorrowerUseCase
})


module.exports = services, { getAllBorrowersUseCase, addBorrowersUseCase, updateBorrowerUseCase }