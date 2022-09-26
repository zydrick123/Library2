const { getAllReadersController, addReaderController, updateReaderController } = require('../../controller/readers/index')


const readerRoutes = ({ readerRouter, makeExpressCallback }) => {

    readerRouter.get('/api/reader', makeExpressCallback(getAllReadersController))
    readerRouter.post('/api/reader', makeExpressCallback(addReaderController))

    readerRouter.patch('/api/reader/:id', makeExpressCallback(updateReaderController))

    return readerRouter
}
module.exports = readerRoutes