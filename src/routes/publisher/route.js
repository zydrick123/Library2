const { getAllPublishersController, addPublisherController, updatePublisherController } = require('../../controller/publishers/index')

const publisherRoutes = ({ publisherRouter, makeExpressCallback }) => {
    publisherRouter.get('/api/publishers', makeExpressCallback(getAllPublishersController))
    publisherRouter.post('/api/publishers', makeExpressCallback(addPublisherController))
    publisherRouter.patch('/api/publishers/:id', makeExpressCallback(updatePublisherController))
    return publisherRouter
}
module.exports = publisherRoutes