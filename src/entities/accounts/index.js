const registerAccount_Entity = require('./register-account')
const updateAccount_Entity = require('./update-account')
const loginAccount_Entity = require('./login-account')
const services = Object.freeze({ registerAccount_Entity, updateAccount_Entity, loginAccount_Entity })

module.exports = services, { registerAccount_Entity, updateAccount_Entity, loginAccount_Entity }