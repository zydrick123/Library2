const { getAllReadersController, addReaderController, updateReaderController } = require('../../controller/readers/index')

const passport = require('passport')
const readerRoutes = ({ readerRouter, makeExpressCallback }) => {

    readerRouter.get('/api/reader', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllReadersController))
    readerRouter.post('/api/reader', passport.authenticate('jwt', { session: false }), makeExpressCallback(addReaderController))

    readerRouter.patch('/api/reader/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateReaderController))

    return readerRouter
}
module.exports = readerRoutes