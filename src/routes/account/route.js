const { getAllAccountsController, addAccountController, updateAccountController, loginAccountsController } = require('../../controller/accounts/index')

const accountRoutes = ({ accountRouter, makeExpressCallback }) => {
    accountRouter.get('/api/accounts', makeExpressCallback(getAllAccountsController))
    accountRouter.post('/api/accounts/login', makeExpressCallback(loginAccountsController))
    accountRouter.post('/api/accounts', makeExpressCallback(addAccountController))
    accountRouter.patch('/api/accounts/:id', makeExpressCallback(updateAccountController))
    return accountRouter
}
module.exports = accountRoutes