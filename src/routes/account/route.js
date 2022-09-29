const { getAllAccountsController, addAccountController, updateAccountController, loginAccountsController } = require('../../controller/accounts/index')

const accountRoutes = ({ accountRouter, makeExpressCallback }) => {
    accountRouter.get('/api/accounts', makeExpressCallback(getAllAccountsController))
        .post('/api/accounts/login', makeExpressCallback(loginAccountsController))
        .post('/api/accounts', makeExpressCallback(addAccountController))
        .patch('/api/accounts/:id', makeExpressCallback(updateAccountController))
    return accountRouter
}
module.exports = accountRoutes