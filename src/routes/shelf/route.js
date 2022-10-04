const { getAllShelfsController, addShelfController, updateShelfController } = require('../../controller/shelf/index')
const passport = require('passport')
const shelfRoutes = ({ shelfRouter, makeExpressCallback }) => {
    shelfRouter.get('/api/shelfs', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllShelfsController))
    shelfRouter.post('/api/shelfs', passport.authenticate('jwt', { session: false }), makeExpressCallback(addShelfController))
    shelfRouter.patch('/api/shelfs/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateShelfController))
    return shelfRouter
}
module.exports = shelfRoutes