//this depends on use-cases 
const { getAllLibrarianUseCase, addLibrarianUseCase, updateLibrarianUseCase, deleteLibrarianUseCase, loginLibrarianUseCase, selectLibrarianUseCase } = require('../../use-cases/librarians/index')

// local functions
const getAllLibrarians = require('./get-all-librarians')
const createLibrarian = require('./add-librarian')
const updateLibrarian = require('./update-librarian')
const deleteLibrarian = require('./delete-librarian')
const loginLibrarian = require('./login-librarian')
const selectLibrarian = require('./select-librarian')
//initialized
const selectLibrarianController = selectLibrarian({ selectLibrarianUseCase })
const loginLibrarianController = loginLibrarian({ loginLibrarianUseCase })
const deleteLibrarianController = deleteLibrarian({ deleteLibrarianUseCase })
const getAllLibrariansController = getAllLibrarians({ getAllLibrarianUseCase })
const addLibrarianController = createLibrarian({ addLibrarianUseCase })
const updateLibrarianController = updateLibrarian({ updateLibrarianUseCase })
const services = Object.freeze({
    getAllLibrariansController,
    addLibrarianController,
    updateLibrarianController,
    deleteLibrarianController,
    loginLibrarianController,
    selectLibrarianController
})

module.exports = services, {
    getAllLibrariansController, addLibrarianController, updateLibrarianController, deleteLibrarianController,
    loginLibrarianController, selectLibrarianController
}
