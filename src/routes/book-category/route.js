const { getAllBookCatsController, addBookCatController, updateBookCatController } = require('../../controller/book-category/index')
const passport = require('passport')
const bookCatRoutes = ({ bookCatRouter, makeExpressCallback }) => {
    bookCatRouter.get('/api/book-cat', makeExpressCallback(getAllBookCatsController))
        .post('/api/book-cat', makeExpressCallback(addBookCatController))
        .patch('/api/book-cat/:id', makeExpressCallback(updateBookCatController))
    return bookCatRouter
}
module.exports = bookCatRoutes