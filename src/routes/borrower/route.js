const { getAllBorrowersController, addBorrowerController, updateBorrowerController } = require('../../controller/borrowers/index')
const passport = require('passport')
const borrowerRoutes = ({ borrowerRouter, makeExpressCallback }) => {
    borrowerRouter.get('/api/borrowers', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllBorrowersController))
        .post('/api/borrowers', passport.authenticate('jwt', { session: false }), makeExpressCallback(addBorrowerController))
        .patch('/api/borrowers/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateBorrowerController))
    return borrowerRouter
}
module.exports = borrowerRoutes