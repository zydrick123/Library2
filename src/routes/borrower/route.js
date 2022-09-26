const { getAllBorrowersController, addBorrowerController, updateBorrowerController } = require('../../controller/borrowers/index')

const borrowerRoutes = ({ borrowerRouter, makeExpressCallback }) => {
    borrowerRouter.get('/api/borrowers', makeExpressCallback(getAllBorrowersController))
    borrowerRouter.post('/api/borrowers', makeExpressCallback(addBorrowerController))
    borrowerRouter.patch('/api/borrowers/:id', makeExpressCallback(updateBorrowerController))
    return borrowerRouter
}
module.exports = borrowerRoutes