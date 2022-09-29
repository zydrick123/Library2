const { getAllBookSubCatsController, addBookSubCatController, updateBookSubCatController } = require('../../controller/book-subcategory/index')

const bookSubCatRoutes = ({ bookSubCatRouter, makeExpressCallback }) => {
    bookSubCatRouter.get('/api/book-subcat', makeExpressCallback(getAllBookSubCatsController))
        .post('/api/book-subcat', makeExpressCallback(addBookSubCatController))
        .patch('/api/book-subcat/:id', makeExpressCallback(updateBookSubCatController))
    return bookSubCatRouter
}
module.exports = bookSubCatRoutes