const { getAllBooksController, addBookController, updateBookController } = require('../../controller/books/index')
const passport = require('passport')

const bookRoutes = ({ bookRouter, makeExpressCallback }) => {
    bookRouter.get('/api/books', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllBooksController))
    bookRouter.post('/api/books', passport.authenticate('jwt', { session: false }), makeExpressCallback(addBookController))
    bookRouter.patch('/api/books/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateBookController))
    return bookRouter
}
module.exports = bookRoutes