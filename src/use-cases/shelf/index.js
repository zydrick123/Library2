const shelfDB = require('../../data-access/shelf/index')

const { registerShelf_Entity, updateShelf_Entity } = require('../../entities/shelf/index')

const getAllShelf = require('./get-all-shelf')
const createShelf = require('./add-shelf')
const updateShelf = require('./update-shelf')


//initialize
const getAllShelfsUseCase = getAllShelf({ shelfDB })
const updateShelfUseCase = updateShelf({ shelfDB, updateShelf_Entity })
const addShelfsUseCase = createShelf({ shelfDB, registerShelf_Entity })


const services = Object.freeze({
    getAllShelfsUseCase, addShelfsUseCase, updateShelfUseCase
})


module.exports = services, { getAllShelfsUseCase, addShelfsUseCase, updateShelfUseCase }