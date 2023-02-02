const publisherDB = require('../../data-access/publishers/index')

const { registerPublisher_Entity, updatePublisher_Entity } = require('../../entities/publishers/index')

const getAllPublisher = require('./get-all-publisher')
const createPublisher = require('./add-publisher')
const updatePublisher = require('./update-publisher')
const updatestatus = require('./updatestatus')


//initialize
const getAllPublishersUseCase = getAllPublisher({ publisherDB })
const updatePublisherUseCase = updatePublisher({ publisherDB, updatePublisher_Entity })
const addPublishersUseCase = createPublisher({ publisherDB, registerPublisher_Entity })
const updatestatusUseCase = updatestatus({ publisherDB })

const services = Object.freeze({
    getAllPublishersUseCase, addPublishersUseCase, updatePublisherUseCase, updatestatusUseCase
})


module.exports = services, { getAllPublishersUseCase, addPublishersUseCase, updatePublisherUseCase, updatestatusUseCase }