const registerBook_Entity = require('./register-book')
const updateBook_Entity = require('./update-book')
const services = Object.freeze({ registerBook_Entity, updateBook_Entity })

module.exports = services, { registerBook_Entity, updateBook_Entity }