const { getAllLibrariansController, addLibrarianController, updateLibrarianController, deleteLibrarianController, loginLibrarianController, selectLibrarianController } = require('../../controller/librarian/index')


const librarianRoutes = ({ librarianRouter, makeExpressCallback }) => {

    librarianRouter.get('/api/librarian', makeExpressCallback(getAllLibrariansController))
    librarianRouter.post('/api/librarian', makeExpressCallback(addLibrarianController))
    librarianRouter.post('/login', makeExpressCallback(loginLibrarianController))
    librarianRouter.patch('/api/librarian/:id', makeExpressCallback(updateLibrarianController))
    librarianRouter.delete('/api/librarian/:id', makeExpressCallback(deleteLibrarianController))
    librarianRouter.get('/api/librarian/:id', makeExpressCallback(selectLibrarianController))
    return librarianRouter
}
module.exports = librarianRoutes