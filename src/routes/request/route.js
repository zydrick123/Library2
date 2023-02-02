const { getAllRequestsController, addRequestController, updateRequestController, deleteRequestController, loginRequestController, selectRequestController, updatestatusController } = require('../../controller/request/index')

const passport = require('passport')
const requestRoutes = ({ requestRouter, makeExpressCallback }) => {

    requestRouter.get('/api/request', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllRequestsController))
        .post('/api/request', passport.authenticate('jwt', { session: false }), makeExpressCallback(addRequestController))
        .post('/login', passport.authenticate('jwt', { session: false }), makeExpressCallback(loginRequestController))
        .patch('/api/request/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateRequestController))
        .delete('/api/request/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(deleteRequestController))
        .get('/api/request/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(selectRequestController))
        .patch('/api/request/delete/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updatestatusController))
    return requestRouter
}
module.exports = requestRoutes