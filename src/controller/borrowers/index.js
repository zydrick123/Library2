const { getAllBorrowersUseCase, addBorrowersUseCase, updateBorrowerUseCase } = require('../../use-cases/borrowers/index')


const getAllBorrowers = require('./get-all-borrowers')
const addBorrower = require('./add-borrower')
const updateBorrower = require('./update-borrower')

const getAllBorrowersController = getAllBorrowers({ getAllBorrowersUseCase })
const updateBorrowerController = updateBorrower({ updateBorrowerUseCase })
const addBorrowerController = addBorrower({ addBorrowersUseCase })

const services = Object.freeze({
    getAllBorrowersController, addBorrowerController, updateBorrowerController
})

module.exports = services, { getAllBorrowersController, addBorrowerController, updateBorrowerController }