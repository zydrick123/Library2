const accountDB = require('../../data-access/accounts/index')

const { registerAccount_Entity, updateAccount_Entity, loginAccount_Entity } = require('../../entities/accounts/index')

const getAllAccount = require('./get-all-account')
const createAccount = require('./add-account')
const updateAccount = require('./update-account')
const loginAccount = require('./login-account')


//initialize
const loginAccountsUseCase = loginAccount({ accountDB, loginAccount_Entity })
const getAllAccountsUseCase = getAllAccount({ accountDB })
const updateAccountUseCase = updateAccount({ accountDB, updateAccount_Entity })
const addAccountsUseCase = createAccount({ accountDB, registerAccount_Entity })


const services = Object.freeze({
    getAllAccountsUseCase, addAccountsUseCase, updateAccountUseCase, loginAccountsUseCase
})


module.exports = services, { getAllAccountsUseCase, addAccountsUseCase, updateAccountUseCase, loginAccountsUseCase }