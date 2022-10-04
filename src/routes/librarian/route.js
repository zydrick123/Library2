const { getAllLibrariansController, addLibrarianController, updateLibrarianController, deleteLibrarianController, loginLibrarianController, selectLibrarianController } = require('../../controller/librarian/index')

const passport = require('passport')
const librarianRoutes = ({ librarianRouter, makeExpressCallback }) => {

    librarianRouter.get('/api/librarian', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllLibrariansController))
        .post('/api/librarian', passport.authenticate('jwt', { session: false }), makeExpressCallback(addLibrarianController))
        .post('/login', passport.authenticate('jwt', { session: false }), makeExpressCallback(loginLibrarianController))
        .patch('/api/librarian/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateLibrarianController))
        .delete('/api/librarian/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(deleteLibrarianController))
        .get('/api/librarian/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(selectLibrarianController))
    return librarianRouter
}
module.exports = librarianRoutes