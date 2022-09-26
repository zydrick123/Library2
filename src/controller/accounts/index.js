const { getAllAccountsUseCase, addAccountsUseCase, updateAccountUseCase, loginAccountsUseCase } = require('../../use-cases/accounts/index')


const getAllAccounts = require('./get-all-account')
const addAccount = require('./add-account')
const updateAccount = require('./update-account')
const loginAccount = require('./login-account')

const loginAccountsController = loginAccount({ loginAccountsUseCase })
const getAllAccountsController = getAllAccounts({ getAllAccountsUseCase })
const updateAccountController = updateAccount({ updateAccountUseCase })
const addAccountController = addAccount({ addAccountsUseCase })

const services = Object.freeze({
    getAllAccountsController, addAccountController, updateAccountController, loginAccountsController
})

module.exports = services, { getAllAccountsController, addAccountController, updateAccountController, loginAccountsController }