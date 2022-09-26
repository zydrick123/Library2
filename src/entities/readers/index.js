const registerReader_Entity = require('./register-reader')
const updateReader_Entity = require('./update-reader')

const services = Object.freeze({ registerReader_Entity, updateReader_Entity })

module.exports = services, { registerReader_Entity, updateReader_Entity }