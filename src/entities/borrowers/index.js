const registerBorrower_Entity = require('./register-borrower')
const updateBorrower_Entity = require('./update-borrower')
const services = Object.freeze({ registerBorrower_Entity, updateBorrower_Entity })

module.exports = services, { registerBorrower_Entity, updateBorrower_Entity }