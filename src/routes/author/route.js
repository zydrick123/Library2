const { getAllAuthorsController, addAuthorController, updateAuthorController } = require('../../controller/authors/index')

const authorRoutes = ({ authorRouter, makeExpressCallback }) => {
    authorRouter.get('/api/authors', makeExpressCallback(getAllAuthorsController))
    authorRouter.post('/api/authors', makeExpressCallback(addAuthorController))
    authorRouter.patch('/api/authors/:id', makeExpressCallback(updateAuthorController))
    return authorRouter
}
module.exports = authorRoutes