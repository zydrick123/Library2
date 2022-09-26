const registerAuthor_Entity = require('./register-author')
const updateAuthor_Entity = require('./update-author')
const services = Object.freeze({ registerAuthor_Entity, updateAuthor_Entity })

module.exports = services, { registerAuthor_Entity, updateAuthor_Entity }