const librarianDB = require('../../data-access/librarian/index')
const {
    registerLibrarian_Entity,
    updateLibrarian_Entity,
    loginLibrarian_Entity,

} = require('../../entities/librarian/index')

//local functions
const getAllLibrarian = require('./get-allLibrarian')
const createLibrarian = require('./insert-librarian')
const updateLibrarian = require('./update-librarian')
const deleteLibrarian = require('./delete-librarian')
const loginLibrarian = require('./login-librarian')
const selectLibrarian = require('./select-librarian')

//initialize use cases sections
const loginLibrarianUseCase = loginLibrarian({ librarianDB, loginLibrarian_Entity })
const deleteLibrarianUseCase = deleteLibrarian({ librarianDB })
const getAllLibrarianUseCase = getAllLibrarian({ librarianDB })
const selectLibrarianUseCase = selectLibrarian({ librarianDB })
const addLibrarianUseCase = createLibrarian({ librarianDB, registerLibrarian_Entity })
const updateLibrarianUseCase = updateLibrarian({ librarianDB, updateLibrarian_Entity })
//Export interfaces
const services = Object.freeze({
    selectLibrarianUseCase, getAllLibrarianUseCase, addLibrarianUseCase, updateLibrarianUseCase, deleteLibrarianUseCase, loginLibrarianUseCase
})

module.exports = services
module.exports = { selectLibrarianUseCase, getAllLibrarianUseCase, addLibrarianUseCase, updateLibrarianUseCase, deleteLibrarianUseCase, loginLibrarianUseCase }
