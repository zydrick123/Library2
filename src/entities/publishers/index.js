const registerPublisher_Entity = require('./register-publisher')
const updatePublisher_Entity = require('./update-publisher')
const services = Object.freeze({ registerPublisher_Entity, updatePublisher_Entity })

module.exports = services, { registerPublisher_Entity, updatePublisher_Entity }