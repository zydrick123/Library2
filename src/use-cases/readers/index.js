const readerDB = require('../../data-access/readers/index')
const {
    registerReader_Entity,
    updateReader_Entity,
    loginReader_Entity
} = require('../../entities/readers/index')

//local functions
const getAllReader = require('./get-all-reader')
const createReader = require('./insert-reader')
const updateReader = require('./update-reader')



//initialize use cases sections

const getAllReaderUseCase = getAllReader({ readerDB })
const addReaderUseCase = createReader({ readerDB, registerReader_Entity })
const updateReaderUseCase = updateReader({ readerDB, updateReader_Entity })
//Export interfaces
const services = Object.freeze({
    getAllReaderUseCase, addReaderUseCase, updateReaderUseCase
})

module.exports = services
module.exports = { getAllReaderUseCase, addReaderUseCase, updateReaderUseCase }
