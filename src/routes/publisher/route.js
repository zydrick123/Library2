const { getAllPublishersController, addPublisherController, updatePublisherController, updatestatusController } = require('../../controller/publishers/index')
const passport = require('passport')
const publisherRoutes = ({ publisherRouter, makeExpressCallback }) => {
    publisherRouter.get('/api/publishers', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllPublishersController))
        .post('/api/publishers', passport.authenticate('jwt', { session: false }), makeExpressCallback(addPublisherController))
        .patch('/api/publishers/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updatePublisherController))
        .patch('/api/publishers/delete/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updatestatusController))
    return publisherRouter
}
module.exports = publisherRoutes