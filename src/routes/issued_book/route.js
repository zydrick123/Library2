const { getAllIssued_BooksController, addIssued_BookController, updateIssued_BookController } = require('../../controller/issued_book/index')
const passport = require('passport')
const issued_BookRoutes = ({ issued_BookRouter, makeExpressCallback }) => {
    issued_BookRouter.get('/api/issued_Books', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllIssued_BooksController))
        .post('/api/issued_Books', passport.authenticate('jwt', { session: false }), makeExpressCallback(addIssued_BookController))
        .patch('/api/issued_Books/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateIssued_BookController))
    return issued_BookRouter
}
module.exports = issued_BookRoutes