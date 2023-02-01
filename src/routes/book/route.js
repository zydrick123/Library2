const { getAllBooksController, addBookController, updateBookController } = require('../../controller/books/index')
const passport = require('passport')

const bookRoutes = ({ bookRouter, makeExpressCallback }) => {
    bookRouter.get('/api/books', makeExpressCallback(getAllBooksController))
        .post('/api/books', passport.authenticate('jwt', { session: false }), makeExpressCallback(addBookController))
        .patch('/api/books/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateBookController))
    return bookRouter
}
module.exports = bookRoutes