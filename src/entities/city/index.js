const registerCity_Entity = require('./register-city')
const updateCity_Entity = require('./update-city')
const services = Object.freeze({ registerCity_Entity, updateCity_Entity })

module.exports = services, { registerCity_Entity, updateCity_Entity }