//this depends on use-cases 
const { getAllReaderUseCase, addReaderUseCase, updateReaderUseCase } = require('../../use-cases/readers/index')

// local functions
const getAllReaders = require('./get-all-reader')
const createReader = require('./add-reader')
const updateReader = require('./update-reader')

//initialized

const getAllReadersController = getAllReaders({ getAllReaderUseCase })
const addReaderController = createReader({ addReaderUseCase })
const updateReaderController = updateReader({ updateReaderUseCase })
const services = Object.freeze({
    getAllReadersController,
    addReaderController,
    updateReaderController,

})

module.exports = services, {
    getAllReadersController, addReaderController, updateReaderController

}
