const { getAllAuthorsController, addAuthorController, updateAuthorController } = require('../../controller/authors/index')

const authorRoutes = ({ authorRouter, makeExpressCallback }) => {
    authorRouter.get('/api/authors', makeExpressCallback(getAllAuthorsController))
        .post('/api/authors', makeExpressCallback(addAuthorController))
        .patch('/api/authors/:id', makeExpressCallback(updateAuthorController))
    return authorRouter
}
module.exports = authorRoutes