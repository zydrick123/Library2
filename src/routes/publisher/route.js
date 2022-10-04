const { getAllPublishersController, addPublisherController, updatePublisherController } = require('../../controller/publishers/index')
const passport = require('passport')
const publisherRoutes = ({ publisherRouter, makeExpressCallback }) => {
    publisherRouter.get('/api/publishers', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllPublishersController))
    publisherRouter.post('/api/publishers', passport.authenticate('jwt', { session: false }), makeExpressCallback(addPublisherController))
    publisherRouter.patch('/api/publishers/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updatePublisherController))
    return publisherRouter
}
module.exports = publisherRoutes