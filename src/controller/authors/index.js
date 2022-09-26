const { getAllAuthorsUseCase, addAuthorsUseCase, updateAuthorUseCase } = require('../../use-cases/authors/index')


const getAllAuthors = require('./get-all-authors')
const addAuthor = require('./add-author')
const updateAuthor = require('./update-author')

const getAllAuthorsController = getAllAuthors({ getAllAuthorsUseCase })
const updateAuthorController = updateAuthor({ updateAuthorUseCase })
const addAuthorController = addAuthor({ addAuthorsUseCase })

const services = Object.freeze({
    getAllAuthorsController, addAuthorController, updateAuthorController
})

module.exports = services, { getAllAuthorsController, addAuthorController, updateAuthorController }