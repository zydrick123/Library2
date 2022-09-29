const { getAllLibrariansController, addLibrarianController, updateLibrarianController, deleteLibrarianController, loginLibrarianController, selectLibrarianController } = require('../../controller/librarian/index')


const librarianRoutes = ({ librarianRouter, makeExpressCallback }) => {

    librarianRouter.get('/api/librarian', makeExpressCallback(getAllLibrariansController))
        .post('/api/librarian', makeExpressCallback(addLibrarianController))
        .post('/login', makeExpressCallback(loginLibrarianController))
        .patch('/api/librarian/:id', makeExpressCallback(updateLibrarianController))
        .delete('/api/librarian/:id', makeExpressCallback(deleteLibrarianController))
        .get('/api/librarian/:id', makeExpressCallback(selectLibrarianController))
    return librarianRouter
}
module.exports = librarianRoutes