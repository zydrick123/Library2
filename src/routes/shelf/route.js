const { getAllShelfsController, addShelfController, updateShelfController } = require('../../controller/shelf/index')

const shelfRoutes = ({ shelfRouter, makeExpressCallback }) => {
    shelfRouter.get('/api/shelfs', makeExpressCallback(getAllShelfsController))
    shelfRouter.post('/api/shelfs', makeExpressCallback(addShelfController))
    shelfRouter.patch('/api/shelfs/:id', makeExpressCallback(updateShelfController))
    return shelfRouter
}
module.exports = shelfRoutes