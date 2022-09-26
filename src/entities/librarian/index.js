const registerLibrarian_Entity = require('./register-librarian')
const updateLibrarian_Entity = require('./update-librarian')
const loginLibrarian_Entity = require('./login-librarian')
const services = Object.freeze({ registerLibrarian_Entity, updateLibrarian_Entity, loginLibrarian_Entity })

module.exports = services, { registerLibrarian_Entity, updateLibrarian_Entity, loginLibrarian_Entity }