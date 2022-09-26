const { getAllPublishersUseCase, addPublishersUseCase, updatePublisherUseCase } = require('../../use-cases/publishers/index')


const getAllPublishers = require('./get-all-publisher')
const addPublisher = require('./add-publisher')
const updatePublisher = require('./update-publisher')

const getAllPublishersController = getAllPublishers({ getAllPublishersUseCase })
const updatePublisherController = updatePublisher({ updatePublisherUseCase })
const addPublisherController = addPublisher({ addPublishersUseCase })

const services = Object.freeze({
    getAllPublishersController, addPublisherController, updatePublisherController
})

module.exports = services, { getAllPublishersController, addPublisherController, updatePublisherController }