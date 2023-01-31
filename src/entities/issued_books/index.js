const registerIssued_Books_Entity = require('./register-issued_book')
const updateIssued_Books_Entity = require('./update-issued_book')
const services = Object.freeze({ registerIssued_Books_Entity, updateIssued_Books_Entity })

module.exports = services, { registerIssued_Books_Entity, updateIssued_Books_Entity }