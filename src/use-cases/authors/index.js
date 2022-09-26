const authorDB = require('../../data-access/authors/index')

const { registerAuthor_Entity, updateAuthor_Entity } = require('../../entities/authors/index')

const getAllAuthor = require('./get-all-author')
const createAuthor = require('./add-author')
const updateAuthor = require('./update-author')


//initialize
const getAllAuthorsUseCase = getAllAuthor({ authorDB })
const updateAuthorUseCase = updateAuthor({ authorDB, updateAuthor_Entity })
const addAuthorsUseCase = createAuthor({ authorDB, registerAuthor_Entity })


const services = Object.freeze({
    getAllAuthorsUseCase, addAuthorsUseCase, updateAuthorUseCase
})


module.exports = services, { getAllAuthorsUseCase, addAuthorsUseCase, updateAuthorUseCase }