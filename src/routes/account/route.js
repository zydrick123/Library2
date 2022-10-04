const { getAllAccountsController, addAccountController, updateAccountController, loginAccountsController } = require('../../controller/accounts/index')
const passport = require('passport')
const accountRoutes = ({ accountRouter, makeExpressCallback }) => {
    accountRouter.get('/api/accounts', passport.authenticate('jwt', { session: false }), makeExpressCallback(getAllAccountsController))
        .post('/api/accounts/login', passport.authenticate('jwt', { session: false }), makeExpressCallback(loginAccountsController))
        .post('/api/accounts', passport.authenticate('jwt', { session: false }), makeExpressCallback(addAccountController))
        .patch('/api/accounts/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updateAccountController))
    return accountRouter
}
module.exports = accountRoutes