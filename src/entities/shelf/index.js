const registerShelf_Entity = require('./register-shelf')
const updateShelf_Entity = require('./update-shelf')
const services = Object.freeze({ registerShelf_Entity, updateShelf_Entity })

module.exports = services, { registerShelf_Entity, updateShelf_Entity }