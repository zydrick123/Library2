const { getAllBorrowersController, addBorrowerController, updateBorrowerController } = require('../../controller/borrowers/index')

const borrowerRoutes = ({ borrowerRouter, makeExpressCallback }) => {
    borrowerRouter.get('/api/borrowers', makeExpressCallback(getAllBorrowersController))
        .post('/api/borrowers', makeExpressCallback(addBorrowerController))
        .patch('/api/borrowers/:id', makeExpressCallback(updateBorrowerController))
    return borrowerRouter
}
module.exports = borrowerRoutes