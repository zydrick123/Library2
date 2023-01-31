const registerIssued_Books_Entity = require('./register-issued_Book')
const updateIssued_Books_Entity = require('./update-issued_Book')
const services = Object.freeze({ registerIssued_Books_Entity, updateIssued_Books_Entity })

module.exports = services, { registerIssued_Books_Entity, updateIssued_Books_Entity }