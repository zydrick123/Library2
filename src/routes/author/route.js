const { getAllAuthorsController, addAuthorController, updateAuthorController } = require('../../controller/authors/index')
const passport = require('passport')
const authorRoutes = ({ authorRouter, makeExpressCallback }) => {
    authorRouter.get('/api/authors', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllAuthorsController))
        .post('/api/authors', passport.authenticate('jwt', { session: false }), makeExpressCallback(addAuthorController))
        .patch('/api/authors/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateAuthorController))
    return authorRouter
}
module.exports = authorRoutes