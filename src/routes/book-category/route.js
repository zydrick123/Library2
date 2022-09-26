const { getAllBookCatsController, addBookCatController, updateBookCatController } = require('../../controller/book-category/index')

const bookCatRoutes = ({ bookCatRouter, makeExpressCallback }) => {
    bookCatRouter.get('/api/book-cat', makeExpressCallback(getAllBookCatsController))
    bookCatRouter.post('/api/book-cat', makeExpressCallback(addBookCatController))
    bookCatRouter.patch('/api/book-cat/:id', makeExpressCallback(updateBookCatController))
    return bookCatRouter
}
module.exports = bookCatRoutes