const { getAllUsersController, addUserController, updateUserController, loginUsersController } = require('../../controller/users/index')
const passport = require('passport')
const userRoutes = ({ userRouter, makeExpressCallback }) => {
    userRouter.get('/api/users', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllUsersController))
        .post('/api/users/login', makeExpressCallback(loginUsersController))
        .post('/api/users', passport.authenticate('jwt', { session: false }), makeExpressCallback(addUserController))
        .patch('/api/users/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateUserController))
    return userRouter
}
module.exports = userRoutes