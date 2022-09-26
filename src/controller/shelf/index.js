const { getAllShelfsUseCase, addShelfsUseCase, updateShelfUseCase } = require('../../use-cases/shelf/index')


const getAllShelfs = require('./get-all-shelf')
const addShelf = require('./add-shelf')
const updateShelf = require('./update-shelf')

const getAllShelfsController = getAllShelfs({ getAllShelfsUseCase })
const updateShelfController = updateShelf({ updateShelfUseCase })
const addShelfController = addShelf({ addShelfsUseCase })

const services = Object.freeze({
    getAllShelfsController, addShelfController, updateShelfController
})

module.exports = services, { getAllShelfsController, addShelfController, updateShelfController }