const { getAllBookSubCatsController, addBookSubCatController, updateBookSubCatController } = require('../../controller/book-subcategory/index')

const bookSubCatRoutes = ({ bookSubCatRouter, makeExpressCallback }) => {
    bookSubCatRouter.get('/api/book-subcat', makeExpressCallback(getAllBookSubCatsController))
    bookSubCatRouter.post('/api/book-subcat', makeExpressCallback(addBookSubCatController))
    bookSubCatRouter.patch('/api/book-subcat/:id', makeExpressCallback(updateBookSubCatController))
    return bookSubCatRouter
}
module.exports = bookSubCatRoutes