const { getAllBookCopysController, addBookCopyController, updateBookCopyController } = require('../../controller/bookcopy/index')

const bookCopyRoutes = ({ bookCopyRouter, makeExpressCallback }) => {
    bookCopyRouter.get('/api/bookcopy', makeExpressCallback(getAllBookCopysController))
    bookCopyRouter.post('/api/bookcopy', makeExpressCallback(addBookCopyController))
    bookCopyRouter.patch('/api/bookcopy/:id', makeExpressCallback(updateBookCopyController))
    return bookCopyRouter
}
module.exports = bookCopyRoutes