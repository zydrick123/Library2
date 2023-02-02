const { getAllPublishersUseCase, addPublishersUseCase, updatePublisherUseCase, updatestatusUseCase } = require('../../use-cases/publishers/index')


const getAllPublishers = require('./get-all-publisher')
const addPublisher = require('./add-publisher')
const updatePublisher = require('./update-publisher')
const updatestatus = require('./updatestatus')

const getAllPublishersController = getAllPublishers({ getAllPublishersUseCase })
const updatePublisherController = updatePublisher({ updatePublisherUseCase })
const addPublisherController = addPublisher({ addPublishersUseCase })
const updatestatusController = updatestatus({ updatestatusUseCase })

const services = Object.freeze({
    getAllPublishersController, addPublisherController, updatePublisherController, updatestatusController
})

module.exports = services, { getAllPublishersController, addPublisherController, updatePublisherController, updatestatusController }